import React from "react";
import styles from "./.module.scss";

export default function OfferCard({ item, index }) {
  const cardStyles = [
    "purple__card",
    "orange__card",
    "dark__gray__card",
    "light__gray__card",
  ];
  return (
    <div
      className={`${styles.offer__card} ${
        styles[`${cardStyles[index < 4 ? index : index % 4]}`]
      }`}
    >
      <div className="row flex-lg-row flex-column-reverse align-items-center justify-content-between w-100 g-0">
        <div className="col-12 col-lg-5 col-xl-4 text-center text-lg-start">
          <p className={`${styles.offer__description} pb-4 pb-lg-0`}>
            {item?.name}
          </p>
        </div>
        <div className={`${styles.right__side} col-12 col-lg-7 col-xl-4`}>
          <div className={styles.offer__image__wrapper}>
            <img
              className={styles.offer__image}
              src={item?.image}
              alt={item?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
