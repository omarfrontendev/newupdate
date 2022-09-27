const serverResponseReducer = (response = {}, action) => {
  switch (action.type) {
    case "USER__REGISTER__ACTION":
      return { ...response, ...action?.payload };
    case "USER__LOGIN__ACTION":
      return { ...response, ...action?.payload };
    case "TOGGLE__FAV__RESTAURANT/ITEM":
      return { ...response, ...action?.payload };
    case "UPDATE__CART__NOTES":
      return { ...response, ...action?.payload };
    case "AOUTH__LOGIN__REGISTER":
      return { ...response, ...action?.payload };
    case "FORGOT__PASSWORD":
      return { ...response, ...action?.payload };
    case "TOGGLE__ITEM__TO__CART":
      return { ...response, ...action?.payload };
    case "SET__ORDER__CHECKOUT":
      return { ...response, ...action?.payload };
    case "SUBMIT__COUPON__TO__CART":
      return { ...response, ...action?.payload };
    case "SET__CUSTOM__ALERT":
      return { ...response, ...action?.payload };
    case "USER__CHANGE__PASSWORD":
      return { ...response, ...action?.payload };
    case "EMPTY__USER__CART":
      return { ...response, ...action?.payload };
    case "USER__CANCEL__ORDER":
      return { ...response, ...action?.payload };
    case "ADD__USER__ADDRESS":
      return { ...response, ...action?.payload };
    case "USER__CHANGE__DEFAULT__ADDRESS":
      return { ...response, ...action?.payload };
    case "USER__DELETE__ADDRESS":
      return { ...response, ...action?.payload };
    case "CLEAR__SERVER__RESPONSE":
      return { ...action?.payload };
    default:
      return response;
  }
};

export default serverResponseReducer;
