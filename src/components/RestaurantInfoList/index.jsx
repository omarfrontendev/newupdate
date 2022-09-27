import React from "react";
import styles from "./.module.scss";
import { connect } from "react-redux";
import { lowerCase } from "lodash";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

const RestaurantInfoList = function ({ item }) {
  const isClosed = (item) => {
    let closed = false;
    let workingHours;
    if (item?.is_schedulable) {
      const day = lowerCase(
        new Date().toLocaleDateString("en", { weekday: "long" })
      );
      const schedule_table = JSON.parse(item?.schedule_data);
      for (const DAY in schedule_table) {
        if (Object.hasOwnProperty.call(schedule_table, DAY)) {
          if (DAY === day) {
            const Hours = schedule_table[DAY];
            workingHours = schedule_table[DAY];
            // eslint-disable-next-line no-loop-func
            Hours.forEach((interval) => {
              // GET ALL ABOUT TIME NOW
              const currentTimeNow = new Date();
              // DETERMINE OPENING AND CLOSEING TIMES
              const openTime = new Date();
              openTime.setHours(interval?.open?.split(":")[0]);
              openTime.setMinutes(interval?.open?.split(":")[1]);
              openTime.setSeconds(0);
              const closeTime = new Date();
              closeTime.setHours(interval?.close?.split(":")[0]);
              closeTime.setMinutes(interval?.close?.split(":")[1]);
              closeTime.setSeconds(0);
              if (
                !(
                  currentTimeNow.getTime() > openTime.getTime() &&
                  currentTimeNow.getTime() < closeTime.getTime()
                )
              ) {
                closed = true;
              }
            });
          }
        }
      }
    }
    return closed
      ? "CLOSED NOW"
      : (() => {
          return (
            workingHours?.map((int) => ` ${int.open} :: ${int.close}`) ||
            "NOT ASSIGNED"
          );
        })();
  };

  const infoList = {
    name: `${item?.name}`,
    data: [
      {
        key: "Minimum Order Amount",
        value: ` ${
          JSON.parse(window.localStorage.getItem("currencyFormat")).value
        }  ${item?.min_order_price}`,
      },
      {
        key: "Working Hours",
        value: !item?.is_schedulable ? "ALWAYS OPEN" : String(isClosed(item)),
      },
      {
        key: "Delivery Time",
        value: `${item?.delivery_time} mins`,
      },
      {
        key: "Delivery fee",
        value: ` ${
          JSON.parse(window.localStorage.getItem("currencyFormat")).value
        }  ${item?.delivery_cost}`,
      },
      {
        key: "Rating",
        value: `${item?.rating}/5`,
      },
      {
        key: "Cuisines",
        value: `${String(item?.description)}`,
      },
    ],
  };

  return (
    <div className={styles.info__container}>
      <div className={styles.title}>{infoList?.name}</div>
      <div className={`${styles.data__container} d-flex flex-column`}>
        {infoList.data.map((item, i) => (
          <div
            key={i}
            className={`${styles.signle__row} d-flex justify-content-between`}
          >
            <span className={styles.data__key}>{item.key}</span>
            <span className={styles.data__value}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfoList);
