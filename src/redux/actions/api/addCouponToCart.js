import api from "../../../api";

const addCouponToCart =
  ({ restaurant_id, coupon, subtotal }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/AddCoupounToCart", {
        restaurant_id,
        coupon,
        subtotal,
      });
      dispatch({
        type: "SUBMIT__COUPON__TO__CART",
        payload: {
          msgType: res.data.success ? "success" : "error",
          ...res.data,
          message: res.data.success
            ? "Discount coupon is applied successfully"
            : res.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT__COUPON__TO__CART",
        payload: { msgType: "error", ...error.response.data },
      });
    }
  };

export default addCouponToCart;
