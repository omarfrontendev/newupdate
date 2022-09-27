import api from "../../../../api";
import filterRequestBody from "../../../../utils/filterRequestBody";

const userRegister = (formData) => async (dispatch) => {
  const data = filterRequestBody(
    formData,
    "name",
    "email",
    "password",
    "phone"
  );
  try {
    const res = await api.post("/register", data);
    dispatch({
      type: "USER__REGISTER__ACTION",
      payload: { msgType: res.data.success ? "success" : "error", ...res.data },
    });
  } catch (error) {
    dispatch({
      type: "USER__REGISTER__ACTION",
      payload: { msgType: "error", ...error.response.data },
    });
  }
};

export default userRegister;
