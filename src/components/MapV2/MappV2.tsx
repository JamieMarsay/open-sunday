import React, { useEffect, useRef, createRef } from "react";

const testLatLng = { lat: 51.509865, lng: -0.118092 };

// styles
const mapStyles = {
  width: "100%",
  height: "400px"
};

function MapV2(props) {
  // refs
  const googleMapRef = createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: testLatLng
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: testLatLng,
      map: googleMap.current
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />;
}

export default MapV2;
