import api from "../../../api";

const cancelOrder =
  ({ order_id }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/cancel-order", {
        order_id,
      });
      dispatch({
        type: "USER__CANCEL__ORDER",
        payload: {
          msgType: res.data.success ? "success" : "error",
          ...res.data,
          //   message: res.data.success
          //     ? "Discount coupon is applied successfully"
          //     : res.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: "USER__CANCEL__ORDER",
        payload: { msgType: "error", ...error.response.data },
      });
    }
  };

export default cancelOrder;
