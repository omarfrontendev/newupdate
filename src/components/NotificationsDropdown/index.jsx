import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";
import { connect } from "react-redux";
import {
  getAllNotifications,
  markAllNotificationsRead,
  markOneNotificationRead,
} from "../../redux/actions";
import Moment from "react-moment";
import EmptyNotifications from "./EmptyNotifications";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  getAllNotifications,
  markAllNotificationsRead,
  markOneNotificationRead,
};

const NotificationsDropdown = function ({
  notMenu,
  onClose,
  showHeader,
  getAllNotifications,
  allNotifications,
  markAllNotificationsRead,
  markOneNotificationRead,
}) {
  const [active, setActive] = useState("all");
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [, setUpdate] = useState(false);
  const [disabledUnreadBtn, setdisabledUnreadBtn] = useState(false);

  useEffect(() => {
    (async () => {
      await getAllNotifications();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNotifications(allNotifications);
    setFilteredNotifications(allNotifications);
    const unread = allNotifications.filter((n) => n.is_read === 0);
    if (!unread.length) {
      setdisabledUnreadBtn(true);
    }
  }, [allNotifications]);

  useEffect(() => {
    setFilteredNotifications(notifications);
    if (active === "all") {
      setFilteredNotifications(notifications);
    } else if (active === "unread") {
      setFilteredNotifications(notifications.filter((n) => n.is_read === 0));
    }
  }, [active, notifications]);

  const readAllNotifications = async () => {
    const updateNotifications = notifications.map((n) => {
      return { ...n, is_read: 1 };
    });
    setNotifications(updateNotifications);
    await markAllNotificationsRead();
  };

  const markOneReadHandler = async (id, read) => {
    if (read === 0) {
      const idx = notifications.findIndex((n) => n.id === id);
      const updateNotification = {
        ...notifications[idx],
        is_read: 1,
      };
      notifications[idx] = updateNotification;
      setUpdate((prev) => !prev);
      const unread = notifications.filter((n) => n.is_read === 0);
      if (!unread.length) {
        setdisabledUnreadBtn(true);
      }
      await markOneNotificationRead(id);
    }
  };

  return (
    <MenuDropDown
      id={"user__notifications__dropdown"}
      marginLeft={"-160px"}
      notMenu={notMenu}
      onClose={onClose}
      showHeader={showHeader}
    >
      {!notifications.length ? (
        <EmptyNotifications />
      ) : (
        <div className={styles.notification__Dropdown}>
          <div className={styles.header__dropdown}>
            <div
              className={`d-flex align-items-center justify-content-between ${styles.notification__header}`}
            >
              <div
                className={`d-flex align-items-center ${styles.left__header}`}
              >
                <button
                  className={`${styles.btn} 
              ${active === "all" ? styles.active : ""}`}
                  onClick={() => setActive("all")}
                >
                  All
                </button>
                <button
                  className={`${styles.btn} ${
                    active === "unread" ? styles.active : ""
                  }`}
                  onClick={() => setActive("unread")}
                  disabled={disabledUnreadBtn}
                >
                  Unread
                </button>
              </div>
              <button
                className={styles.right__header}
                onClick={readAllNotifications}
              >
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>
          <div className={styles.notifications}>
            {filteredNotifications?.map((n) => (
              <div
                onClick={() => markOneReadHandler(n.id, n.is_read)}
                key={n.id}
                className={`d-flex ${styles.signle__notificate} ${
                  n.is_read !== 0 ? "" : styles.not__seen
                }`}
              >
                <div className={styles.notificate__icon}>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.notificate__content}>
                  <p className={styles.notificate__title}>
                    {JSON.parse(n.data).title}
                  </p>
                  <span className={styles.notificate__date}>
                    <Moment toNow>{n?.created_at}</Moment>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </MenuDropDown>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDropdown);
