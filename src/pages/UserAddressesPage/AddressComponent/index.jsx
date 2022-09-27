import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteAddress,
  getUserAddreses,
  setDefaultAddress,
} from "../../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  deleteAddress,
  getUserAddreses,
  setDefaultAddress,
};

export const AddressComponent = ({
  address,
  deleteAddress,
  setDefaultAddress,
  getUserAddreses,
  notControlled,
  onClick,
}) => {
  const [default_, setDefault] = useState(Boolean(address?.is_default));
  const [hidden] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setDefault(address?.is_default);
  }, [address]);

  return (
    <>
      {!hidden ? (
        <div
          onClick={onClick ? onClick : null}
          className={`${styles.address__component} ${default_ && styles.default}
          ${onClick && styles.clickable}
          `}
        >
          <div className={styles.address_data}>
            <p className={styles.title}>
              {address?.address_name} <span>({address?.area})</span>
            </p>
            <span className={styles.address__inf}>{address?.street_name}</span>
            <span className={styles.address__inf}>
              {address?.building_type}
            </span>
            <span className={styles.address__inf}>
              {`${address?.floor_number && `${`${address?.floor_number}, `}`} ${
                address?.apartment_number
              } ${address?.building_name}`}
            </span>
            {address?.landmark && (
              <span className={styles.address__inf}>{address?.landmark}</span>
            )}
            {
              <span className={styles.address__inf}>
                {address?.mobile_number}
              </span>
            }
          </div>
          {!notControlled && (
            <footer>
              {!default_ && !confirm && (
                <button
                  onClick={async () => {
                    await setDefaultAddress({ address_id: address?.id });
                    await getUserAddreses();
                    setSubmitting(false);
                    setconfirm(false);
                  }}
                  className={styles.setDefault__btn}
                >
                  Set Default
                </button>
              )}
              {!confirm ? (
                <span
                  className={styles.delete__btn}
                  onClick={() => setconfirm(true)}
                >
                  <RiDeleteBin6Line className={styles.icon} />
                </span>
              ) : (
                <div className={styles.actions}>
                  <button
                    disabled={submitting}
                    onClick={async () => {
                      setSubmitting(true);
                      await deleteAddress({ address_id: address?.id });
                      await getUserAddreses();
                      setSubmitting(false);
                      setconfirm(false);
                    }}
                  >
                    {!submitting ? "confirm" : "wait"}
                  </button>
                  <button onClick={() => setconfirm(false)}>cancel</button>
                </div>
              )}
            </footer>
          )}
        </div>
      ) : (
        <></>
      )}{" "}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent);
