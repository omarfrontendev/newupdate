import React, { useRef, useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import { connect } from "react-redux";
import _ from "lodash";
import { VscClose } from "react-icons/vsc";
import { clearReducer } from "../../redux/actions";
import "./style.scss";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { clearReducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function NotificationPopUp({ serverResponse, clearReducer }) {
  const [interval] = useState(3500);

  const ref = useRef();
  useEffect(() => {
    if (!_.isEmpty(serverResponse) && serverResponse.message) {
      new bootstrap.Toast(ref.current).show();
      setTimeout(() => {
        clearReducer({ type: "SERVER__RESPONSE", payload: {} });
      }, interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverResponse]);
  return (
    <>
      {!_.isEmpty(serverResponse) && (
        <div
          className="position-fixed"
          style={{
            width: "320px",
            zIndex: "10000000",
            right: "20px",
            bottom: "40px",
          }}
        >
          <div
            ref={ref}
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-bs-delay={interval}
          >
            <div className={`${serverResponse?.msgType}`}>
              <div className={`bg`}></div>
              <div className={`toast__wrapper`}>
                <div className={`toast-header`}>
                  <span className={"notify_type"}>
                    {serverResponse?.msgType}
                  </span>
                  <div className="ms-auto">
                    <button
                      type="button"
                      className="close__btn"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <VscClose />
                    </button>
                  </div>
                </div>
                <div className={`toast-body`}>{serverResponse?.message}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
