import api from "../../../api";

const orderCheckout =
  ({ address_id, payment_mode }) =>
  async (dispatch) => {
    try {
      const res = await api.post(`/checkout`, {
        address_id,
        payment_mode,
      });
      dispatch({
        type: "SET__ORDER__CHECKOUT",
        payload: {
          msgType: res.data.success ? "success" : "error",
          ...res.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "SET__ORDER__CHECKOUT",
        payload: { msgType: "error", ...error.response.data },
      });
    }
  };

export default orderCheckout;
