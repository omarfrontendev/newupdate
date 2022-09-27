import React from "react";
import styles from "./.module.scss";

export default function NoAddresses() {
  return (
    <div className={styles.no__addresses__wrapper}>
      <p className={styles.head}>No results in this location</p>
      <div className={styles.img__wrapper}>
        <img className={styles.img} src="/assets/no_address.svg" alt="" />
      </div>
      <p className={styles.paragraph}>There's no vendors in this locations</p>
      <span>
        Looks like you are a little far away, Is this the right address?
      </span>
      <button
        className={styles.add_address_btn}
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#add__address__model`}
      >
        Add New Address
      </button>
    </div>
  );
}
