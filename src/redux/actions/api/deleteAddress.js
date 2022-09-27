import api from "../../../api";

const deleteAddress =
  ({ address_id }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/delete-location", {
        address_id,
      });
      dispatch({
        type: "USER__DELETE__ADDRESS",
        payload: {
          ...res.data,
          msgType: res.data.success ? "success" : "error",
        },
      });
    } catch (error) {
      dispatch({
        type: "USER__DELETE__ADDRESS",
        payload: { ...error.response.data },
      });
    }
  };

export default deleteAddress;
