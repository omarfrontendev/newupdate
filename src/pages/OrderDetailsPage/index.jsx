import React, { useState, useEffect } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { connect } from "react-redux";
import LoadWrapper from "../../components/LoadWrapper";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getMyOrders, clearReducer } from "../../redux/actions";
import { isEmpty } from "lodash";
import NoOrder from "./NoOrder";
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getMyOrders,
  clearReducer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function OrderDetailsPage({ getMyOrders, orders, clearReducer }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentOrder, setCurrentOrder] = useState({});

  useEffect(() => {
    (async () => {
      await getMyOrders();
      setisLoading(false);
    })();

    return () => clearReducer({ type: "MY__ORDERS", payload: {} });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    orders && setCurrentOrder(orders?.trackOrder?.find((item, i) => !i));
  }, [orders]);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | My Order</title>
          </Helmet>
          {!isEmpty(currentOrder) ? (
            <>
              <div className="pt-3">
                <div className={styles.order__details__page}>
                  <div className={styles.page__section__header}>
                    <h3 className={styles.section__heading}>my order</h3>
                  </div>
                  <div className={styles.order__styled__header}>
                    <div
                      className={`${styles.left__side} d-flex align-items-center`}
                    >
                      <div className={styles.res__logo__wrapper}>
                        <img
                          className={styles.res__logo}
                          src={currentOrder.restaurant.image}
                          alt="logo"
                        />
                      </div>
                      <div className={styles.order__info}>
                        <h3 className={styles.order__res__name}>
                          {currentOrder.restaurant.name}
                        </h3>
                        <span className={styles.order__res__meals}>
                          {currentOrder.restaurant.description}
                        </span>
                        <div className={styles.order__res__facts}>
                          <div className={styles.list__item}>
                            <AiFillStar className={styles.star__icon} />
                            <span>
                              {Number(
                                orders?.trackOrder[0]?.restaurant?.rating
                              ).toFixed(1)}
                            </span>
                          </div>
                          <div className={styles.list__item}>
                            <HiLocationMarker />
                            <span>{currentOrder.restaurant.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.order__actions__wrapper}>
                      <Link
                        to={"/order-tracking"}
                        className={styles.order__action__btn}
                      >
                        Tracking
                      </Link>
                      {currentOrder.orderstatus_id < 2 && (
                        <button
                          className={`${styles.order__action__btn} ${styles.cancel__btn}`}
                          data-bs-toggle="modal"
                          data-bs-target={`#cancel__modal`}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.page__section__header}>
                    <h3 className={styles.section__heading}>Order Details</h3>
                  </div>
                  <ul className={styles.order__details__list}>
                    {orders?.trackOrder[0]?.items.map((item, i) => (
                      <li className={styles.order__item__row} key={i}>
                        <span className={styles.order__item__title}>
                          {item.name} x{item.quantity}
                        </span>
                        <span className={styles.order__item__price}>
                          {item.price}{" "}
                          {
                            JSON.parse(
                              window.localStorage.getItem("currencyFormat")
                            ).value
                          }
                        </span>
                      </li>
                    ))}
                    <li
                      className={`${styles.order__item__row} ${styles.subtotal__row}`}
                    >
                      <span className={styles.order__item__title}>
                        Subtotal
                      </span>
                      <span className={styles.order__item__price}>
                        <span className={styles.value}>
                          {currentOrder.sub_total.toFixed(2)}
                        </span>{" "}
                        {
                          JSON.parse(
                            window.localStorage.getItem("currencyFormat")
                          ).value
                        }
                      </span>
                    </li>
                  </ul>

                  <div className={styles.page__section__header}>
                    <h3 className={styles.section__heading}>Order Details</h3>
                  </div>
                  <ul className={styles.order__details__list}>
                    <li className={styles.order__item__row}>
                      <span className={styles.order__item__title}>
                        Payment Method
                      </span>
                      <span
                        className={styles.order__item__price}
                        style={{ textTransform: "uppercase" }}
                      >
                        {currentOrder.payment_mode}
                      </span>
                    </li>
                    <li className={styles.order__item__row}>
                      <span className={styles.order__item__title}>
                        Delivery fee
                      </span>
                      <span className={styles.order__item__price}>
                        {currentOrder.delivery_charge}{" "}
                        {
                          JSON.parse(
                            window.localStorage.getItem("currencyFormat")
                          ).value
                        }
                      </span>
                    </li>
                    {Boolean(currentOrder.discount) && (
                      <li className={styles.order__item__row}>
                        <span className={styles.order__item__title}>
                          Discount Coupon
                        </span>
                        <span
                          className={`${styles.order__item__price} ${styles.sale}`}
                        >
                          {Number(currentOrder.discount).toFixed(2)}{" "}
                          {
                            JSON.parse(
                              window.localStorage.getItem("currencyFormat")
                            ).value
                          }
                        </span>
                      </li>
                    )}
                  </ul>
                  <hr />
                  <ul className={styles.order__details__list}>
                    <li
                      className={`${styles.order__item__row} ${styles.subtotal__row}`}
                    >
                      <span className={styles.order__item__title}>
                        Total Amount
                      </span>
                      <span className={styles.order__item__price}>
                        <span className={styles.value}>
                          {currentOrder.total.toFixed(2)}
                        </span>{" "}
                        {
                          JSON.parse(
                            window.localStorage.getItem("currencyFormat")
                          ).value
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <NoOrder />
          )}
        </>
      )}
    </>
  );
});
