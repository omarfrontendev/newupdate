import api from "../../../../api";

const changePassword = (values) => async (dispatch) => {
  try {
    const res = await api.post("/change-password-user", {
      ...values,
    });
    dispatch({
      type: "USER__CHANGE__PASSWORD",
      payload: { msgType: res.data.success ? "success" : "error", ...res.data },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "USER__CHANGE__PASSWORD",
      payload: { msgType: "error", ...error.response.data },
    });
    return error.response.data;
  }
};

export default changePassword;
