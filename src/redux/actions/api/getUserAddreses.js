import api from "../../../api";

const getUserAddreses = (data) => async (dispatch) => {
  try {
    const res = await api.get("/view-locations");
    dispatch({
      type: "GET__USER__ADDRESSES",
      payload: [...res.data.data.saved],
    });
  } catch (error) {
    dispatch({
      type: "GET__USER__ADDRESSES",
      payload: [],
    });
  }
};

export default getUserAddreses;
