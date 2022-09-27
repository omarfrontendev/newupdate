import React from "react";
import styles from "./.module.scss";

export default function AddonBox({
  addons,
  id,
  type,
  name,
  title,
  data,
  selectType,
  setAllowedToAddToCart,
  catID,
  allowedToAddToCart,
  addon,
  setAddons,
  mandatory,
  limits,
  limit,
  setLimits,
}) {
  return (
    <>
      <label className={styles.addon__wrapper}>
        <input
          id={id}
          name={name}
          className={styles.addon__box}
          type={type}
          data-select={data}
          onChange={(e) => {
            if (mandatory) {
              if (selectType === "SINGLE") {
                setAllowedToAddToCart([
                  // eslint-disable-next-line eqeqeq
                  ...allowedToAddToCart.filter((item) => +item.id !== +catID),
                  { id: catID, select: true },
                ]);
              }
            }
            if (selectType === "SINGLE") {
              const inps = document.querySelectorAll(
                `input[data-select=${data}]`
              );
              inps.forEach((e) =>
                e.addEventListener("change", (ev) => {
                  ev.target.checked && setAddons([...addons, String(id)]);
                  inps.forEach((c) => {
                    if (c !== e) {
                      c.checked = false;
                      if (addons.includes(String(c.id))) {
                        setAddons([
                          ...addons.filter((addon) => +addon !== +c.id),
                          String(id),
                        ]);
                      }
                    }
                  });
                })
              );
            }
            if (selectType === "MULTI") {
              let current = limits.find((item) => +item.id === +catID)?.current;
              current = e.target.checked ? current + 1 : current - 1;
              setLimits([
                ...limits.filter((item) => +item.id !== +catID),
                {
                  id: catID,
                  limit,
                  current,
                  valid: mandatory ? limit === current : limit >= current,
                },
              ]);
              e.target.checked && setAddons([...addons, String(id)]);
              !e.target.checked &&
                // eslint-disable-next-line eqeqeq
                setAddons(addons.filter((addon) => +addon !== +id));
            }
          }}
        />
        <span>
          {title}{" "}
          {`( ${parseInt(addon.price)} ${
            JSON.parse(window.localStorage.getItem("currencyFormat")).value
          }
          )`}
        </span>
      </label>
    </>
  );
}
