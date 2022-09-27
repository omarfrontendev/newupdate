const userAddressesReducer = (addresses = [], action) => {
  switch (action.type) {
    case "GET__USER__ADDRESSES":
      return [...action?.payload];
    case "CLEAR__USER__ADDRESSES":
      return [...action?.payload];
    default:
      return addresses;
  }
};

export default userAddressesReducer;
