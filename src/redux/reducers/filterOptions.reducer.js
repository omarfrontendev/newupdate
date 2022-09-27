const filterOptionsReducer = (options = [], action) => {
  switch (action.type) {
    case "UPDATE__FILTER__OPTIONS":
      return { ...options, ...action?.payload };
    case "CLEAR__FILTER__OPTIONS":
      return action.payload;
    default:
      return options;
  }
};

export default filterOptionsReducer;
