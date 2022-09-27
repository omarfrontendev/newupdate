import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./.module.scss";
import input from "../AddonBox/.module.scss";
import {
  getUserCart,
  toggleItemToCart,
  setCustomAlert,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserCart, toggleItemToCart, setCustomAlert };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HeaderItemPrice({
  itemDetails,
  getUserCart,
  toggleItemToCart,
  addons,
  setAddons,
  allowedToAddToCart,
  setAllowedToAddToCart,
  setCustomAlert,
  limits,
  setLimits,
}) {
  const [quantity, setQuantity] = useState(itemDetails.quantity);
  const cartAction = async (action, qnt) => {
    const done = await toggleItemToCart({
      item_id: itemDetails.id,
      restaurant_id: itemDetails.restaurant_id,
      action: action,
      addons: addons,
    });
    if (done) {
      setQuantity(quantity + qnt);
      setAddons([]);
      getUserCart();
      clear();
    }
  };

  const clear = () => {
    setAllowedToAddToCart(
      itemDetails?.addon_categories
        ?.filter((item) => item.mandatory)
        ?.map((item) => {
          return { id: item.id, select: false };
        })
    );
    setLimits(
      itemDetails?.addon_categories
        ?.filter((item) => item.type === "MULTI")
        .map((item) => {
          return {
            id: item.id,
            limit: item.addon_limit,
            current: 0,
            valid: Boolean(item?.type === "MULTI" && !item.mandatory),
          };
        })
    );
    document.querySelectorAll(`.${input.addon__box}`).forEach((element) => {
      element.checked = false;
    });
  };

  useEffect(() => {
    setQuantity(itemDetails.quantity);
  }, [itemDetails.quantity]);

  return (
    <div className={`${styles.item__price__container}`}>
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-7">
          <div className={styles.left}>
            <div className={styles.img__wrapper}>
              <img src={itemDetails?.image} alt={itemDetails?.name} />
            </div>
            <div className={`${styles.item__title}`}>
              <div className={styles.title}>{itemDetails?.name}</div>
              <div className={styles.subtitle}>{itemDetails?.description}</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-5">
          <div className={`${styles.item__price__content}`}>
            <div className={styles.item__quantity__control}>
              <button
                onClick={async () => {
                  if (quantity >= 1) {
                    await cartAction("decrease", -1);
                  }
                }}
                className={styles.control__btn}
              >
                -
              </button>
              <div className={styles.quantity}>{quantity}</div>
              <button
                onClick={async () => {
                  if (
                    allowedToAddToCart.length &&
                    !allowedToAddToCart
                      ?.map((item) => item.select)
                      ?.reduce((a, b) => a && b)
                  ) {
                    return setCustomAlert({
                      msgType: "error",
                      message:
                        "Please select your choice for the required items",
                    });
                  } else if (
                    limits.length &&
                    !limits?.map((item) => item.valid)?.reduce((a, b) => a && b)
                  ) {
                    return setCustomAlert({
                      msgType: "error",
                      message: "Please commit to the limits",
                    });
                  } else {
                    await cartAction("increase", 1);
                  }
                }}
                className={styles.control__btn}
              >
                +
              </button>
            </div>
            <div className={`${styles.item__price}`}>
              <div className={styles.price__word}>Price:</div>
              <div className={`${styles.item__price}`}>
                {Boolean(Number(itemDetails?.old_price)) && (
                  <div className={styles.last__price}>
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }{" "}
                    {itemDetails?.old_price}
                  </div>
                )}
                <div className={styles.new__price}>
                  <span className={styles.SAR}>
                    {" "}
                    {
                      JSON.parse(window.localStorage.getItem("currencyFormat"))
                        .value
                    }{" "}
                  </span>{" "}
                  {itemDetails?.price}
                  {/* {quantity ? itemDetails?.price * quantity : +itemDetails.price} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
