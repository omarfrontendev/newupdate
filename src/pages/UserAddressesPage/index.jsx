import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import styles from "./.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { getUserAddreses, clearReducer } from "../../redux/actions";
import AddressComponent from "./AddressComponent";
import LoadWrapper from "../../components/LoadWrapper";
import NoAddresses from "./NoAddresses";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { getUserAddreses, clearReducer };

export const UserAddressesPage = ({
  getUserAddreses,
  clearReducer,
  userAddresses,
}) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    (async () => {
      await getUserAddreses();
      setLoad(false);
    })();
    return () => clearReducer({ type: "USER__ADDRESSES", payload: [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Pick • a | My Addresses</title>
      </Helmet>
      {!load ? (
        <div className={styles.addreses__page}>
          <div className="py-5">
            {Boolean(userAddresses?.length) ? (
              <div className={styles.__row__wrapper}>
                <div className={styles.row__header}>
                  <p className={styles.row__title}>My Addresses</p>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#add__address__model`}
                    className={styles.row__btn}
                  >
                    <AiOutlinePlus className={styles.plus__icon} />
                    <span>Add Address</span>
                  </button>
                </div>
                <div className={styles.row__contant__wrapper}>
                  <div className="row">
                    {userAddresses.map((address, i) => (
                      <div
                        key={i}
                        className={"col-12 col-md-6 col-lg-4 col-xl-3"}
                      >
                        <AddressComponent address={address} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NoAddresses />
            )}
          </div>
        </div>
      ) : (
        <LoadWrapper />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressesPage);
