import React, { useState, useEffect } from "react";
import ModalPopUp from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import styles from "./.module.scss";
import { connect } from "react-redux";
import { cancelOrder, getMyOrders } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { cancelOrder, getMyOrders };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CancelPoup({ cancelOrder, getMyOrders, orders }) {
  const [order, setOrder] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    orders?.trackOrder && setOrder(orders?.trackOrder?.find((item, i) => !i));
  }, [orders]);

  return (
    <ModalPopUp maxWidth="500px" id="cancel__modal">
      <PopUpWrapper
        title="Cancelling order!"
        id="cancel__modal"
        textStart={true}
      >
        <div className={styles.cancel__content}>
          <p className={styles.cancel__ph}>
            Are you sure to cancel your order?
          </p>
          <div
            className={`d-flex align-items-center justify-content-center ${styles.btns}`}
          >
            <button
              className={`${styles.btn} ${styles.btn__sure}`}
              onClick={async () => {
                setSubmitting(true);
                await cancelOrder({ order_id: order?.id });
                await getMyOrders();
                setSubmitting(false);
              }}
              data-bs-toggle="modal"
              data-bs-target={`#cancel__modal`}
            >
              {!submitting ? (
                "Sure"
              ) : (
                <div
                  className={`spinner-border spinner-border-sm ${styles.spinner}`}
                  role="status"
                ></div>
              )}
            </button>
            <button
              className={`${styles.btn} ${styles.btn__close}`}
              data-bs-toggle="modal"
              data-bs-target={`#cancel__modal`}
            >
              Close
            </button>
          </div>
        </div>
      </PopUpWrapper>
    </ModalPopUp>
  );
});
