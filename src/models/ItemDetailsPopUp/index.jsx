import React, { useState, useEffect } from "react";
// import { CartBtnIcon } from "../../UI/icons";
// import SubmitBtn from "../../components/SubmitBtn";
import HeaderItemPrice from "../../components/HeaderItemPrice";
import ModalPopUp from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import styles from "./.module.scss";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/AccordionItem";
import AddonBox from "../../components/AddonBox";
import {
  toggleItemToCart,
  getUserCart,
  clearReducer,
} from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { toggleItemToCart, getUserCart, clearReducer };

const ItemDetailsPopUp = ({ itemDetails, clearReducer }) => {
  const [currentActive, setCurrentActive] = useState(null);
  const [addons, setAddons] = useState([]);
  const [allowedToAddToCart, setAllowedToAddToCart] = useState([]);
  const [limits, setLimits] = useState([]);

  useEffect(() => {
    setAllowedToAddToCart(
      itemDetails?.addon_categories
        ?.filter((item) => item.mandatory)
        ?.filter((item) => item.type === "SINGLE")
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemDetails]);

  const onClose = () => {
    setCurrentActive(null);
    setAddons([]);
    setAllowedToAddToCart([]);
    setLimits([]);
    clearReducer({ type: "ITEM__POPUP__DATA", payload: {} });
  };

  return (
    <>
      <ModalPopUp onClose={onClose} id={"item__details__popup"}>
        <PopUpWrapper
          fn={onClose}
          title="Add Item Choices"
          id={"item__details__popup"}
          textStart={true}
        >
          {isEmpty(itemDetails) ? (
            <div className={styles.loading}>
              <div className="text-center">
                <div
                  className={`spinner-border ${styles.spinner}`}
                  role="status"
                ></div>
                <div className="py-3">Please Wait!</div>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.content}>
                <HeaderItemPrice
                  itemDetails={itemDetails}
                  addons={[...new Set([...addons])].map((addon) =>
                    String(addon)
                  )}
                  setAddons={setAddons}
                  allowedToAddToCart={allowedToAddToCart}
                  setAllowedToAddToCart={setAllowedToAddToCart}
                  limits={limits}
                  setLimits={setLimits}
                />
                <div
                  className={`d-flex flex-column ${styles.acc__container}`}
                  id="ACC__ID"
                >
                  <Accordion id={"ITEMACCORDION"}>
                    {itemDetails?.addon_categories
                      .filter((item) => item.addon.length)
                      .map((item, i) => {
                        return (
                          <AccordionItem
                            transparentStyle={true}
                            type={"addonsList"}
                            required={item.mandatory}
                            allowedToAddToCart={allowedToAddToCart}
                            setAllowedToAddToCart={setAllowedToAddToCart}
                            currentActive={currentActive}
                            setCurrentActive={setCurrentActive}
                            items={item}
                            key={i}
                            id={`ITEMID${i}`}
                            parentID="ITEMACCORDION"
                            index={i}
                          >
                            <div className={styles.addons__container}>
                              {Boolean(item?.type === "SINGLE") &&
                                item?.addon.map((addon, i) => (
                                  <AddonBox
                                    setAddons={setAddons}
                                    addon={addon}
                                    id={addon.id}
                                    name={item?.id}
                                    type={"checkbox"}
                                    key={i}
                                    title={addon?.name}
                                    addons={addons}
                                    selectType={item.type}
                                    mandatory={Boolean(item.mandatory)}
                                    catID={addon.addon_category_id}
                                    allowedToAddToCart={allowedToAddToCart}
                                    data={`SINGLE__${item.id}__MAN${item.mandatory}`}
                                    setAllowedToAddToCart={
                                      setAllowedToAddToCart
                                    }
                                    limit={item.addon_limit}
                                    limits={limits}
                                    setLimits={setLimits}
                                  />
                                ))}
                              {Boolean(item?.type === "MULTI") &&
                                item?.addon.map((addon, i) => (
                                  <AddonBox
                                    addon={addon}
                                    id={addon.id}
                                    name={item.name}
                                    type={"checkbox"}
                                    key={i}
                                    title={addon?.name}
                                    addons={addons}
                                    setAddons={setAddons}
                                    mandatory={Boolean(item.mandatory)}
                                    selectType={item.type}
                                    data={`MULTI__${item.id}__MAN${item.mandatory}`}
                                    catID={addon.addon_category_id}
                                    allowedToAddToCart={allowedToAddToCart}
                                    setAllowedToAddToCart={
                                      setAllowedToAddToCart
                                    }
                                    limit={item.addon_limit}
                                    limits={limits}
                                    setLimits={setLimits}
                                  />
                                ))}
                            </div>
                          </AccordionItem>
                        );
                      })}
                  </Accordion>
                </div>
                {/* <div className={styles.btn}> */}
                {/*<SubmitBtn
                          // disabled={submitting}
                          type={"submit"}
                          solidStyle={true}
                          // type="button"
                          // className={styles.close__btn}
                          ata-bs-toggle="modal"
                          data-bs-target={`#item__details__popup`}
                        >
                          <div className={`${styles.btn__content}`}>
                            <CartBtnIcon />
                            <span>Add To Cart</span>
                          </div>
                        </SubmitBtn>*/}
                {/* </div> */}
              </div>
            </>
          )}
        </PopUpWrapper>
      </ModalPopUp>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPopUp);
