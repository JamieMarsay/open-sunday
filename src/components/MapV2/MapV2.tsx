import React, { useEffect, useRef, createRef } from "react";

const testLatLng = { lat: 51.509865, lng: -0.118092 };

const MapV2 = () => {
  const googleMapRef = createRef<HTMLDivElement>();
  const googleMap = useRef();
  const marker = useRef();

  const createGoogleMap: any = () => {
    if (googleMapRef.current) {
      return new window.google.maps.Map(googleMapRef.current, {
        zoom: 16,
        center: { lat: testLatLng.lat, lng: testLatLng.lng },
        disableDefaultUI: true
      });
    }
  };

  const createMarker: any = () => {
    return new window.google.maps.Marker({
      position: { lat: testLatLng.lat, lng: testLatLng.lng },
      map: googleMap.current
    });
  };

  const addMarker = () => {
    marker.current = createMarker();
  };

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&libraries=places`;
    window.document.body.appendChild(mapScript);

    mapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      // marker.current = createMarker();
    });
  });

  return (
    googleMapRef && (
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: "100%", height: "100vh" }}
        onClick={() => addMarker()}
      />
    )
  );
};

export default MapV2;
