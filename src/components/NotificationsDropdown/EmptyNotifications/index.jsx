import React from "react";
import styles from "./.module.scss";
import { useNavigate } from "react-router-dom";

export default function EmptyNotifications() {
  const navigate = useNavigate();
  return (
    <div className={styles.empty__list}>
      <span className={styles.head}>Nothing here!</span>
      <div className={styles.img__wrapper}>
        <img
          className={styles.img}
          src="/assets/emptynotifications.png"
          alt="no__content"
        />
      </div>
      <p className={styles.content}>No notification right now</p>
      <span className={styles.span}>You're up-to-date!</span>
      <button
        className={styles.btn}
        onClick={() => {
          const user__notifications__dropdown = document.getElementById(
            "user__notifications__dropdown"
          );
          user__notifications__dropdown.classList.remove("show");
          user__notifications__dropdown.setAttribute("style", "");
          navigate("/home");
        }}
      >
        Back To Home
      </button>
    </div>
  );
}
