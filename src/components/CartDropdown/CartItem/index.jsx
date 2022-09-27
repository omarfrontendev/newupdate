import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import { getUserCart, toggleItemToCart } from "../../../redux/actions";
import { AiFillDelete } from "react-icons/ai";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart, toggleItemToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CartItem({
  item,
  parentID,
  id,
  getUserCart,
  toggleItemToCart,
  userCart,
  length,
}) {
  const [quantity, setQuantity] = useState();
  const [load, setLoad] = useState(false);
  const [addonsPrice, setAddonsPrice] = useState(0);
  const [addonsIDS, setAddonsIDS] = useState([]);

  useEffect(() => {
    setQuantity(item.quantity || 0);
    setAddonsPrice(
      item?.addon_categories
        ?.map((add) => add?.addon?.map((add) => +add?.price))
        .flat()
        ?.reduce((a, b) => +a + +b, 0)
    );
    setAddonsIDS(
      item?.addon_categories
        ?.map((add) => add?.addon?.map((add) => add))
        .flat()
        .map((i) => String(i.id))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  const cartAction = async (action) => {
    setLoad(true);
    await toggleItemToCart({
      item_id: item.id,
      restaurant_id: userCart.restaurant.id,
      action: action,
      addons: addonsIDS,
    });
    await getUserCart();
    setLoad(false);
  };

  return (
    <div className={styles.cart__item}>
      <div className={`${styles.cart__item__btn}`}>
        {Boolean(length) && (
          <span
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
            className={styles.toggle__icon}
          ></span>
        )}
        <div className="w-100 d-flex align-items-center justify-content-between">
          <div className="left">
            <div className={styles.cart__item__name}>{item?.name}</div>
          </div>
          <div className="right d-flex align-items-center">
            <div className={styles.item__quantity__control}>
              {quantity !== 1 && (
                <>
                  <button
                    disabled={load}
                    onClick={async () => cartAction("decrease")}
                    className={styles.control__btn}
                  >
                    -
                  </button>
                </>
              )}
              {quantity === 1 && (
                <button
                  disabled={load}
                  className={`${styles.remove_btn}`}
                  onClick={async () => cartAction("decrease")}
                >
                  <AiFillDelete />
                </button>
              )}
              <div className={styles.quantity}>
                {!load ? (
                  quantity
                ) : (
                  <div style={{ transform: "scale(.6)" }}>
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></div>
                  </div>
                )}
              </div>
              <button
                disabled={load}
                onClick={async () => cartAction("increase")}
                className={styles.control__btn}
              >
                +
              </button>
            </div>
            <p className={styles.cart__item__price}>
              {(+item?.price + addonsPrice) * quantity}{" "}
              <span className={styles.currency}>
                {
                  JSON.parse(window.localStorage.getItem("currencyFormat"))
                    .value
                }
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parentID}`}
      >
        <div className={styles.cart__item__body}>
          <ul className={styles.item__addons__list}>
            {item.addon_categories.map((addon, i) => {
              return (
                <React.Fragment key={i}>
                  {
                    <>
                      <div className={styles.list__label}>{addon.name}</div>
                      {addon.addon.map((item, i) => {
                        return (
                          <li key={i} className={styles.addon}>
                            <span className={`me-2 ${styles.icon}`}></span>
                            <div className="w-100 d-flex align-items-center justify-content-between">
                              <p className={styles.addon__name}>{item.name}</p>
                              <p className={styles.cart__item__price}>
                                {parseInt(item.price)}{" "}
                                <span className={styles.currency}>
                                  {
                                    JSON.parse(
                                      window.localStorage.getItem(
                                        "currencyFormat"
                                      )
                                    ).value
                                  }
                                </span>
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </>
                  }
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});
