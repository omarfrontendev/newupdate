import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

export default function CardsRow({ children, title, link }) {
  return (
    <div className={styles.cards__row__wrapper}>
      <div className={styles.row__header}>
        <p className={styles.row__title}>{title}</p>
        <Link to={link || "/"}>
          <a className={styles.row__link} href={link || "/"}>
            <span>view more</span>
            <IoIosArrowDropright className={styles.link__arrow__icon} />
          </a>
        </Link>
      </div>
      <div className={styles.row__contant__wrapper}>{children}</div>
    </div>
  );
}
