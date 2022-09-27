const setCustomAlert = (payload) => (dispatch) => {
  dispatch({
    type: `SET__CUSTOM__ALERT`,
    payload,
  });
};

export default setCustomAlert;
