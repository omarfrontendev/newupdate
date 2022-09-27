import React, { useEffect, useState } from "react";
import { PhoneIcon } from "../../UI/icons";
import styles from "./.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { connect } from "react-redux";
import LoadWrapper from "../../components/LoadWrapper";
import { Helmet } from "react-helmet";
import OrderTrackingMap from "../../components/OrderTrackingMap";
import { getMyOrders, clearReducer } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getMyOrders, clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function OrderTrackingPage({ orders, getMyOrders, clearReducer }) {
  const [isLoading, setisLoading] = useState(true);
  const [orderStatus, setorderStatus] = useState(null);

  useEffect(() => {
    orders?.trackOrder?.length &&
      setorderStatus(orders?.trackOrder[0]?.orderstatus_id);
  }, [orders]);

  useEffect(() => {
    (async () => {
      await getMyOrders();
      setisLoading(false);
    })();
    return () => clearReducer({ type: "MY__ORDERS", payload: {} });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | Track Your Order</title>
          </Helmet>
          <div className={styles.tracking__container}>
            <h3 className={styles.tracking__title}>Tracking Order</h3>
            <div className={styles.tracking__map}>
              <OrderTrackingMap orders={orders} />
            </div>
            <div className={`${styles.tracking__wedgits} `}>
              <div className={styles.tracking__status}>
                <div className={`${styles.status__title}`}>Status</div>
                <div className={`${styles.status}`}>
                  <div
                    className={`${styles.status__item} ${
                      orderStatus >= 1 && styles.active
                    } `}
                  >
                    <div className={styles.status__word}>Approved</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} ${
                      orderStatus >= 2 && styles.active
                    }`}
                  >
                    <div className={styles.status__word}>Preparing Order</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} ${
                      orderStatus >= 4 && styles.active
                    }`}
                  >
                    <div className={styles.status__word}>Out for Delivery</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                  <div
                    className={`${styles.status__item} ${
                      orderStatus >= 5 && styles.active
                    }`}
                  >
                    <div className={styles.status__word}>Recived</div>
                    <div className={styles.status__bullets}></div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.tracking__supports} d-flex flex-column`}
              >
                <div
                  className={`${styles.support__calling} d-flex align-items-center justify-content-between`}
                >
                  <div className={`${styles.left__support} d-flex flex-column`}>
                    <div className={styles.support__title}>
                      {orders.trackOrder[0]?.delivery_guy?.name ||
                        "Order delivery boy not assigned yet"}
                    </div>
                    <div className={styles.support__subtitle}>Delivery Boy</div>
                  </div>
                  {orders.trackOrder[0]?.delivery_guy?.phone && (
                    <a
                      href={`tel:${orders.trackOrder[0]?.delivery_guy?.phone}`}
                      className={styles.calling__btn}
                    >
                      <PhoneIcon />
                    </a>
                  )}
                </div>
                <div
                  className={`${styles.support__calling} d-flex align-items-center justify-content-between`}
                >
                  <div className={`${styles.left__support} d-flex flex-column`}>
                    <div className={styles.support__title}>Support</div>
                  </div>
                  <button
                    className={`${styles.calling__btn} ${styles.arrow__btn}`}
                    data-bs-toggle="modal"
                    data-bs-target={`#support`}
                  >
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});
