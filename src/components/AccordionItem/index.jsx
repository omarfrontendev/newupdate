import React, { useEffect } from "react";
import styles from "./.module.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function AccordionItem({
  items,
  parentID,
  id,
  currentActive,
  setCurrentActive,
  index,
  children,
  required,
  type,
  transparentStyle,
  title
}) {
  useEffect(() => {
    (async () => {})();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles.accordion__item} ${
        Boolean(transparentStyle) && styles.transparent__style
      }`}
    >
      <button
        onClick={() => setCurrentActive(index)}
        className={`${styles.accordion__item__btn}`}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded={currentActive === index}
        aria-controls={id}
      >
        <span className={styles.accordion__item__title}>
          {items?.name || title}{" "}
          {type === "addonsList" ? (
            Boolean(required) ? (
              <span className={styles.small}>{`*`}</span>
            ) : (
              <span className={styles.small}>{`( Optional )`}</span>
            )
          ) : null}
          {/* {`( ${items.type} )`} */}
        </span>
        <span className={styles.arrow__icon}>
          <RiArrowDownSFill />
        </span>
      </button>
      <div
        id={id}
        className={`accordion-collapse collapse `}
        data-bs-parent={`#${parentID}`}
      >
        <div className={styles.accordion__item__body}>
          {children || <div className="p-4">NO ITEMS FOUND</div>}
        </div>
      </div>
    </div>
  );
});
