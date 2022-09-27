const searchResultsReducer = (results = [], action) => {
  switch (action.type) {
    case "GET__RESTAURANTS__SEARCH__RESULTS":
      return action.payload;
    case "SET__FILTER__OPTIONS__RESULTS":
      return action.payload;
    default:
      return results;
  }
};

export default searchResultsReducer;
