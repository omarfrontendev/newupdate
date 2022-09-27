import api from "../../../api";

const emptyUserCart = () => async (dispatch) => {
  try {
    const res = await api.post("/empty-cart");
    dispatch({
      type: "EMPTY__USER__CART",
      payload: { msgType: res.data.success ? "success" : "error", ...res.data },
    });
  } catch (error) {
    dispatch({
      type: "EMPTY__USER__CART",
      payload: { msgType: "error", ...error.response.data },
    });
  }
};

export default emptyUserCart;
