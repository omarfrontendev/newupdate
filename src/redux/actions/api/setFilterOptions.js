import api from "../../../api";

const setFilterOptions = (options) => async (dispatch) => {
  try {
    const res = await api.post(
      // `/filter-restaurants?category_id=${options.category_id}&top_rated=${options.top_rated}&delivery_time=${options.delivery_time}`,
      `/get-all-restaurants-categories`
    );
    console.log(res);
    dispatch({
      type: "SET__FILTER__OPTIONS__RESULTS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "SET__FILTER__OPTIONS__RESULTS",
      payload: [],
    });
  }
};

export default setFilterOptions;
