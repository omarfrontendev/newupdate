import React from "react";
import styles from "./.module.scss";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className={styles.empty__Cart}>
      <span className={styles.head}>No items yet!</span>
      <div className={styles.img__wrapper}>
        <img
          className={styles.img}
          src="/assets/emptycart.png"
          alt="no__content"
        />
      </div>
      <p className={styles.content}>Your cart is empty!</p>
      <span className={styles.span}>Search for your best food and dishes</span>
      <button
        className={styles.btn}
        onClick={() => {
          const userCartDropdown = document.getElementById(
            "user__cart__dropdown"
          );
          userCartDropdown.classList.remove("show");
          userCartDropdown.setAttribute("style", "");
          navigate("/home");
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
}
