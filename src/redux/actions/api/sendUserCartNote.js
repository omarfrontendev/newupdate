import api from "../../../api";

const sendUserCartNote = (values) => async (dispatch) => {
  try {
    const res = await api.post(`/add-notes`, { notes: values });
    dispatch({
      type: "UPDATE__CART__NOTES",
      payload: {
        ...res.data,
        msgType: res.data.success ? "success" : "error",
        message: "Cart note has been updated",
      },
    });
  } catch (error) {
    dispatch({
      type: "UPDATE__CART__NOTES",
      payload: {
        ...error.response.data,
        message: "Error on update cart note",
        msgType: "error",
      },
    });
  }
};

export default sendUserCartNote;
