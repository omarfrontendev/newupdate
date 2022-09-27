import React from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const CategoryBtn = ({ icon, title, id }) => {
  return (
    <div className={styles.category__btn}>
      <input
        data-type="category"
        className={styles.checkbox}
        type="radio"
        name="category_id"
        hidden
        id={id}
      />
      <label className={styles.options__btn} htmlFor={id}>
        <span className={`${styles.options__icon}`}>{icon}</span>
        <div className={styles.btn__word}>{title}</div>
      </label>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBtn);
