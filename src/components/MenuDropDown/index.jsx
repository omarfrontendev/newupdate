import React from "react";
import styles from "./.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MenuDropDown({
  alignedEnd,
  marginLeft,
  children,
  notMenu,
  onClose,
  showHeader,
  id,
}) {
  return (
    <div
      id={id}
      className={`dropdown-menu ${notMenu && styles.not__menu} ${
        alignedEnd && "dropdown-menu-end"
      } ${styles.dropdown__menu__wrapper}`}
    >
      {notMenu && (
        <button
          onClick={() => onClose((prev) => !prev)}
          className={styles.close__btn}
        >
          <AiOutlineCloseCircle />
        </button>
      )}
      <div
        style={{ marginLeft: marginLeft || "0px" }}
        className={`${styles.menu__content__wrapper} ${
          alignedEnd && styles.righted__menu
        } ${showHeader === null ? "" : showHeader ? "" : styles.down}`}
      >
        {children}
      </div>
    </div>
  );
}
