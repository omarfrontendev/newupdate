import api from "../../../api";

const getPromoSliders = () => async (dispatch) => {
  try {
    const res = await api.get("/promo-sliders");
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: res.data.data.slides,
    });
  } catch (error) {
    dispatch({
      type: "GET__PROMO__SLIDES",
      payload: [],
    });
  }
};

export default getPromoSliders;
