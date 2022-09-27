import api from "../../../api";

const toggleItemToCart =
  ({ item_id, restaurant_id, action, addons }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/cart-items-action", {
        item_id,
        restaurant_id,
        action,
        addons,
      });
      dispatch({
        type: "TOGGLE__ITEM__TO__CART",
        payload: {
          ...res.data.data,
          msgType: res.data.success ? "success" : "error",
          message: res.data.success
            ? "Your cart has been updated successfully"
            : "Error on adding item to your cart",
        },
      });
      return res.data.success ? true : false;
    } catch (error) {
      dispatch({
        type: "TOGGLE__ITEM__TO__CART",
        payload: { msgType: "error", ...error.response.data },
      });
      return false;
    }
  };

export default toggleItemToCart;
