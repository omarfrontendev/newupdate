import api from "../../../api";

const getCurrencyFormat = () => async () => {
  try {
    const res = await api.get("/get-setting/currencyFormat");
    window.localStorage.setItem(
      "currencyFormat",
      JSON.stringify({ ...res.data.data })
    );
  } catch (error) {
    return;
  }
};

export default getCurrencyFormat;
