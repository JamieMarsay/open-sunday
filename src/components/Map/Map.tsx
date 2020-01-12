import React, { useState, FunctionComponent } from "react";
// @ts-ignore
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

interface IMap {
  google: any;
}
const MapContainer: FunctionComponent<IMap> = ({ google }) => {
  const [test, setTest] = useState();

  const fetchPlaces = (mapProps: any, map: any) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const geocoder = new google.maps.Geocoder();

    const postCode = "ls18 5aa";
    geocoder.geocode({ address: postCode }, function(
      results: any,
      status: any
    ) {
      const location = results[0].geometry.location;

      map.setCenter(location);

      service.nearbySearch(
        {
          location: { lat: location.lat(), lng: location.lng() },
          radius: 500,
          type: ["store"]
        },
        (results: any, status: any, pagination: any) =>
          setTest(results.map((i: any) => i))
      );
    });
  };

  return (
    <Map google={google} zoom={14} onReady={fetchPlaces}>
      {test
        ? test.map((i: any) => (
            <Marker
              key={i.name}
              title={i.name}
              name={i.name}
              position={{
                lat: i.geometry.location.lat(),
                lng: i.geometry.location.lng()
              }}
            />
          ))
        : null}
      <InfoWindow onClose={() => console.log("test close")}>
        <div>
          <h1>test</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
  libraries: ["places"]
})(MapContainer);
