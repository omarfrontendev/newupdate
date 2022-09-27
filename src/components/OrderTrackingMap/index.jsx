import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { updateLocation, getUserAddreses } from "../../redux/actions";
import styles from './.module.scss'
import { ImLocation } from 'react-icons/im'


const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateLocation, getUserAddreses };

const OrderTrackingMap = ({ orders, location, userAddresses }) => {
  const [mapCenter, setMapCenter] = useState({});
  const [zoom, setZoom] = useState(15);
  const [handleApiLoaded, setHandleApiLoaded] = useState(() => {});


  useEffect(() => {
    setZoom(15);
    setMapCenter({
      lat: +orders?.trackOrder[0]?.restaurant?.latitude,
      lng: +orders?.trackOrder[0]?.restaurant?.longitude,
    });
    setHandleApiLoaded(() => (map, maps) => {
      const flightPlanCoordinates = [
        { lat: +orders.trackOrder[0].restaurant.latitude, lng: +orders.trackOrder[0].restaurant.longitude},
        { lat: userAddresses[0]?.lat && +userAddresses[0]?.lat, lng: userAddresses[0]?.long && +userAddresses[0]?.long}
      ];
      var flightPath = new maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF7800",
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });
  
      flightPath.setMap(map);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GoogleMapReact
      center={mapCenter}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals={true}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      <div 
      className={styles.cutsome__marker}
      lat={ +orders.trackOrder[0].restaurant.latitude} 
      lng={+orders.trackOrder[0].restaurant.longitude}
      >
        <ImLocation 
          className={styles.marker}
        />
        <p className={styles.location__title}>restaurant Location</p>
        <span className={styles.location}>{orders.trackOrder[0].restaurant.name}</span>
      </div>
      <div 
        className={styles.cutsome__marker}
        lat={userAddresses[0]?.lat && +userAddresses[0]?.lat} 
        lng={userAddresses[0]?.long && +userAddresses[0]?.long}
      >
        <ImLocation 
          className={styles.marker}
        />
        <p className={styles.location__title}>Your Current Location</p> 
        <div className={styles.location}>{userAddresses[0]?.address_name},</div>
        <div className={styles.location}>{userAddresses[0]?.area},</div>
        <div className={styles.location}>{userAddresses[0]?.street_name}</div>
      </div>
    </GoogleMapReact>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTrackingMap);
