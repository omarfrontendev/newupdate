import api from "../../../api";

const setDefaultAddress =
  ({ address_id }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/set-default-location", {
        location_id: address_id,
      });

      dispatch({
        type: "USER__CHANGE__DEFAULT__ADDRESS",
        payload: {
          ...res.data,
          msgType: res.data.success ? "success" : "error",
          message: res.data.success
            ? "Default address changed successfully"
            : res.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: "USER__CHANGE__DEFAULT__ADDRESS",
        payload: { ...error.response.data, msgType: "error" },
      });
    }
  };

export default setDefaultAddress;
