import React, { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
// import { MdAdd } from "react-icons/md";
import SubmitBtn from "../SubmitBtn";
import styles from "./.module.scss";
import { RiCoupon2Line } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";
// import { FaCcVisa, FaPaypal } from "react-icons/fa";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  getUserCart,
  orderCheckout,
  addCouponToCart,
  setCustomAlert,
  getMyOrders,
} from "../../redux/actions";
import { isEmpty } from "lodash";
import AddressComponent from "../../pages/UserAddressesPage/AddressComponent";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  orderCheckout,
  getUserCart,
  addCouponToCart,
  setCustomAlert,
  getMyOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CheckoutForm({
  setCheckout,
  userCart,
  orderCheckout,
  getUserCart,
  addCouponToCart,
  setCustomAlert,
  getMyOrders,
  orders,
  userAddresses,
}) {
  const [submit, setSubmit] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});
  const [change, setChange] = useState(false);
  const [address, setAddress] = useState(
    userAddresses?.find((address) => address.is_default)
  );

  useEffect(() => {
    (async () => {
      await getMyOrders();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAddress(userAddresses?.find((address) => address.is_default));
  }, [userAddresses]);

  useEffect(() => {
    orders && setCurrentOrder(orders?.trackOrder?.find((item, i) => !i));
  }, [orders]);

  const onClick = async ({ address }) => {
    setAddress(address);
    setChange(false);
  };

  const onSubmitHandler = async (values) => {
    await addCouponToCart({
      coupon: values.coupon,
      restaurant_id: userCart.restaurant.id,
      subtotal: userCart.PaymentDetail.subtotal,
    });
    getUserCart();
  };
  return (
    <div className={styles.checkout__form}>
      <div className={styles.form__content}>
        <button
          onClick={() => setCheckout(false)}
          type="button"
          className={`d-flex align-items-center ${styles.back__btn}`}
        >
          <HiArrowNarrowLeft className={styles.icon} />
          Checkout
        </button>
        <div className={styles.address__select__area}>
          <div className={styles.header}>
            <span className={styles.title}>Delivery to</span>
            {!change && address && (
              <button onClick={() => setChange(true)} className={styles.btn}>
                Change
              </button>
            )}
          </div>
          <div>
            {!change && address && (
              <AddressComponent address={address} notControlled={true} />
            )}
            {!address && (
              <div className={styles.no__addresses}>
                <p>You have no shipping address yet! </p>
                {/* <Link to={"/addresses"}>ADD ONE</Link> */}
                <button
                  onClick={() => {
                    const userCartDropdown = document.getElementById(
                      "user__cart__dropdown"
                    );
                    userCartDropdown.classList.remove("show");
                    userCartDropdown.setAttribute("style", "");
                  }}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#add__address__model"
                  className={styles.btn}
                >
                  ADD ONE
                </button>
              </div>
            )}
            {change && (
              <div className="row">
                {userAddresses.map((address, i) => (
                  <div key={i} className="col-6">
                    <AddressComponent
                      address={address}
                      notControlled={true}
                      onClick={() => onClick({ address })}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.payment__method__conatiner}>
          <div
            className={`${styles.payment__header} d-flex align-items-start justify-content-between`}
          >
            <div className={styles.payment__title}>Payment Method</div>
            {/* <button type="button" className={styles.add__card__btn}>
              <MdAdd className={styles.icon} /> Add Card
            </button> */}
          </div>
          <div className={`${styles.methods} d-flex flex-column`}>
            <div className={styles.method}>
              <input
                readOnly
                type="radio"
                id="cash"
                value="Cash"
                name="payment__method"
                className={`${styles.input} d-none`}
                checked
              />
              <label
                htmlFor="cash"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaMoneyBill />
                  </span>
                  <span>Cash On Delivery</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div>
            {/* <div className={styles.method}>
              <input
                type="radio"
                id="visa"
                value="Visa"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="visa"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaCcVisa />
                  </span>
                  <span>**** **** **** 2184</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div> */}
            {/* <div className={styles.method}>
              <input
                type="radio"
                id="paypal"
                value="paypal"
                name="payment__method"
                className={`${styles.input} d-none`}
              />
              <label
                htmlFor="paypal"
                className={`d-flex align-items-center justify-content-between ${styles.method__label}`}
              >
                <div className={`${styles.left} d-flex align-items-center`}>
                  <span className={styles.payment__method__icon}>
                    <FaPaypal />
                  </span>
                  <span>test@email.com</span>
                </div>
                <div className={styles.custom__radio}></div>
              </label>
            </div> */}
          </div>
        </div>
        {/* <div className="pt-4"></div> */}
        <div className={styles.coupon__container}>
          <div className={styles.title}>Save on your order</div>
          <div className={`${styles.input__content} d-flex align-items-center`}>
            <Form onSubmit={onSubmitHandler}>
              {({ handleSubmit, submitting }) => (
                <form
                  className="w-100 d-flex align-items-center justify-content-between"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <span className="me-2">
                      <RiCoupon2Line />
                    </span>
                    <Field
                      component={"input"}
                      placeholder="enter your coupon code"
                      type="text"
                      name="coupon"
                      className={styles.input}
                    />
                  </div>
                  <button
                    disabled={submitting}
                    className={styles.btn}
                    type="submit"
                  >
                    {submitting ? "Wait" : "Apply"}
                  </button>
                </form>
              )}
            </Form>
          </div>
        </div>
        <div className="py-3">
          <p
            className={`${styles.row__title} ${styles.payment__details__title}`}
          >
            Payment Details
          </p>
          <div className={styles.payment__details__wrapper}>
            <div className={`${styles.payment__details}`}>
              {userCart?.PaymentDetail?.subtotal && (
                <div className={`${styles.payment_details__row}`}>
                  <p className={styles.details}>Subtotal</p>
                  <span className={styles.value}>
                    {Number(userCart?.PaymentDetail?.subtotal).toFixed(2)}{" "}
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }
                  </span>
                </div>
              )}

              {userCart?.PaymentDetail?.delivery_fee && (
                <div className={`${styles.payment_details__row}`}>
                  <p className={styles.details}>Delivery fee</p>
                  <span className={styles.value}>
                    {Number(userCart?.PaymentDetail?.delivery_fee).toFixed(2)}{" "}
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }
                  </span>
                </div>
              )}

              {Boolean(userCart?.PaymentDetail?.discountCoupon) && (
                <div className={`${styles.payment_details__row}`}>
                  <p className={styles.details}>Discount</p>
                  <span className={styles.value}>
                    {Number(userCart?.PaymentDetail?.discountCoupon).toFixed(2)}{" "}
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }
                  </span>
                </div>
              )}

              {userCart?.PaymentDetail?.total_amount && (
                <div className={`${styles.payment_details__row}`}>
                  <p className={styles.details}>Total amount</p>
                  <span className={`${styles.value} ${styles.total}`}>
                    {Number(userCart?.PaymentDetail?.total_amount).toFixed(2)}{" "}
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center ${styles.cheackout__btn}`}
      >
        <SubmitBtn
          disabled={submit}
          type="button"
          solidStyle={true}
          onClick={async () => {
            if (!address) {
              return setCustomAlert({
                msgType: "error",
                message: `You have no default address for your order`,
              });
            }
            if (!isEmpty(currentOrder) && currentOrder?.orderstatus_id < 2) {
              return setCustomAlert({
                msgType: "error",
                message: `You already have a running order, try to cancel it to add a new one`,
              });
            }
            if (
              userCart.PaymentDetail.subtotal <
              parseInt(userCart.restaurant.min_order_price)
            ) {
              return setCustomAlert({
                msgType: "error",
                message: `Min order price for "${
                  userCart.restaurant.name
                }" restaurant is ${userCart.restaurant.min_order_price} ${
                  JSON.parse(localStorage.getItem("currencyFormat")).value
                }`,
              });
            } else {
              setSubmit(true);
              await orderCheckout({
                address_id: address.id,
                payment_mode: "cash",
              });
              setSubmit(false);
              getUserCart();
              setCheckout(false);
              getMyOrders();
            }
          }}
        >
          Place Order
        </SubmitBtn>
      </div>
    </div>
  );
});
