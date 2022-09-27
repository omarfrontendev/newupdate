import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StartPage from "../../pages/StartPage";
import LoadWrapper from "../../components/LoadWrapper";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

const IsDeliverable = ({ location, children }) => {
  const [isReady, setisReady] = useState(false);
  useEffect(() => {
    setisReady(true);
  }, []);

  const [isDeliverable, setisDeliverable] = useState(
    Boolean(location?.deliverable && location?.name)
  );

  useEffect(() => {
    if (isReady) {
      if (location.name) {
        setisDeliverable(Boolean(location?.deliverable));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  if (isDeliverable === true) {
    return children;
  } else if (isDeliverable === false) {
    return <StartPage errorMsg={true} />;
  } else if (isDeliverable === undefined) {
    return <LoadWrapper />;
  } else {
    alert(isDeliverable);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IsDeliverable);
