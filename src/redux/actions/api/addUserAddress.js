import api from "../../../api";

const addUserAddress = (data) => async (dispatch) => {
  try {
    const res = await api.post("/add-location", { ...data });
    dispatch({
      type: "ADD__USER__ADDRESS",
      payload: {
        ...res.data.data,
        msgType: res.data.success ? "success" : "error",
        message: res.data.success
          ? "New address added successfully"
          : res.data.message,
      },
    });
  } catch (error) {
    dispatch({
      type: "ADD__USER__ADDRESS",
      payload: { ...error.response.data, msgType: "error" },
    });
  }
};

export default addUserAddress;
