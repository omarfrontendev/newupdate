import React from "react";
import styles from "./.module.scss";

export default function NoOrder() {
  return (
    <div className={styles.no__order__component}>
      <img
        width={200}
        className={styles.no__order__img}
        src="/assets/no_order-cropped.svg"
        alt="NO_ORDER"
      />
    </div>
  );
}
