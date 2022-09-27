import api from "../../../../api";

const forgotPassword = (email) => async (dispatch) => {
  try {
    const res = await api.post("/send-password-reset-mail", {
      email,
    });
    dispatch({
      type: "FORGOT__PASSWORD",
      payload: { msgType: res.data.success ? "success" : "error", ...res.data },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: "FORGOT__PASSWORD",
      payload: { msgType: "error", ...error.response.data },
    });
    return error.response.data;
  }
};

export default forgotPassword;
