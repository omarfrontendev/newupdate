import React, { useRef, useState, useEffect } from "react";
import styles from "./.module.scss";
import { BsCheck } from "react-icons/bs";
import { BeverageIcon, DessertIcon, FoodIcon, OfferIcon } from "../../UI/icons";
import { connect } from "react-redux";
import SubmitBtn from "../SubmitBtn";
import CategoryBtn from "./CategoryBtn";
import { setFilterOptions } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { setFilterOptions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function FilterOptions({ setFilterOptions }) {
  const FORM = useRef(null);
  const [filters, setFilters] = useState({
    category_id: null,
    delivery_time: false,
    top_rated: false,
  });

  const sortedBy = [
    {
      id: "delivery_time",
      value: "Delivery Time",
    },
    {
      id: "top_rated",
      value: "Top rated",
    },
  ];

  return (
    <form
      ref={FORM}
      onSubmit={async (e) => {
        e.preventDefault();
        await setFilterOptions(filters);
      }}
      onReset={() =>
        setFilters({ category_id: [], delivery_time: false, top_rated: false })
      }
      onChange={(e) => {
        e.target.dataset.type === "category" && Boolean(e.target.checked);
        setFilters({
          ...filters,
          category_id: e.target.id,
        });
        e.target.dataset.type === "sort" &&
          e.target.id === "delivery_time" &&
          setFilters({
            ...filters,
            delivery_time: e.target.id === "delivery_time" && e.target.checked,
          });
        e.target.dataset.type === "sort" &&
          e.target.id === "top_rated" &&
          setFilters({
            ...filters,
            top_rated: e.target.id === "top_rated" && e.target.checked,
          });
      }}
      className={styles.options__container}
    >
      <div
        className={`${styles.options__header} d-flex align-items-center justify-content-between`}
      >
        <div className={styles.options__categories}>Categories</div>
        <button
          onClick={() => FORM?.current?.reset()}
          type="button"
          className={styles.options__Clear}
        >
          Clear All
        </button>
      </div>
      <div className={`${styles.options__btns} d-flex align-items-center`}>
        <CategoryBtn id={1} icon={<BeverageIcon />} title="Beverages" />
        <CategoryBtn id={2} icon={<DessertIcon />} title="Desserts" />
        <CategoryBtn id={3} icon={<FoodIcon />} title="Food" />
        <CategoryBtn id={4} icon={<OfferIcon />} title="Best offers" />
      </div>
      <div className={`${styles.options__sort}`}>
        <div className={styles.options__sort__content}>
          <div className={styles.options__sort__title}>Sort by</div>
          <div className={`${styles.options__checkboxes} d-flex flex-column`}>
            {sortedBy.map((input, i) => (
              <div className={styles.option__row} key={i}>
                <input
                  className={styles.checkbox__input}
                  type="checkbox"
                  id={input.id}
                  hidden
                  data-type="sort"
                />
                <label htmlFor={input.id}>
                  <span>{input.value}</span>
                  <span className={styles.checkbox__icon}>
                    <BsCheck className={styles.checked__icon} />
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubmitBtn type={"submit"} smBorder solidStyle>
        Save and apply
      </SubmitBtn>
    </form>
  );
});
