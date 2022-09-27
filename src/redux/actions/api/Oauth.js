import api from "../../../api";

const oAuthLogin_Register =
  ({ app, token, email }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/login-with-social-media", {
        social_media_token: token,
        social_media_auth_type: app,
        token_type: app,
        token,
        email,
      });
      dispatch({
        type: "AOUTH__LOGIN__REGISTER",
        payload: {
          msgType: res.data.success ? "success" : "error",
          ...res.data,
        },
      });
      return res.data;
    } catch (error) {
      dispatch({
        type: "AOUTH__LOGIN__REGISTER",
        payload: { msgType: "error", ...error.response.data },
      });
      return error.response.data;
    }
  };

export default oAuthLogin_Register;
