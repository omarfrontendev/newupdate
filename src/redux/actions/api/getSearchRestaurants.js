import api from "../../../api";

const getSearchRestaurants = (query) => async (dispatch) => {
  try {
    const res = await api.post("/search-restaurants", {
      q: query,
      latitude: JSON.parse(window.localStorage.getItem("location"))?.lat,
      longitude: JSON.parse(window.localStorage.getItem("location"))?.lng,
    });
    dispatch({
      type: "GET__RESTAURANTS__SEARCH__RESULTS",
      payload: [...res.data.data.restaurants, ...res.data.data.items],
    });
  } catch (error) {
    dispatch({
      type: "GET__RESTAURANTS__SEARCH__RESULTS",
      payload: [],
    });
  }
};

export default getSearchRestaurants;
