import React, { useState, FunctionComponent } from "react";
import {
  Map,
  Marker,
  GoogleApiWrapper,
  Circle,
  InfoWindow
} from "google-maps-react";
import Spinner from "@Components/Spinner/Spinner";
import pin from "@Assets/pin.svg";
import { testLatLng, testPlaces } from "@TestData/testData";
import Menu from "@Components/Menu/Menu";
import { mapOptions } from "./MapOptions";

interface IMap {
  google: any;
}
const MapContainer: FunctionComponent<IMap> = ({
  searchLocation,
  businessType,
  google
}) => {
  const [finalBusinesses, setFinalBusinesses] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [latLng, setLatLng] = useState();
  const [activeMarker, setActiveMarker] = useState();
  const [selectedPlace, setSelectedPlace] = useState();
  const [visisble, setVisible] = useState();

  // const onMarkerClick = (props, marker) => {
  //   setActiveMarker(marker);
  //   setSelectedPlace(props);
  //   setVisible(true);
  // };

  const fetchPlaces = async (mapProps: any, map: any) => {
    map.setCenter(mapOptions.initialCenter);
    map.setZoom(14);
    toggleLoading(false);
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div className={`${loading ? "opacity--none" : "fade--in"}`}>
        <Map
          style={{ maxWidth: "1440px", height: "100%" }}
          initialCenter={mapOptions.initialCenter}
          // @ts-ignore
          styles={mapOptions.styles}
          onReady={fetchPlaces}
          disableDefaultUI
          google={google}
          zoom={5}
        >
          {testPlaces.map((i: any) => (
            <Marker
              key={i.place_id}
              title={i.name}
              position={{
                lat: i.geometry.location.lat(),
                lng: i.geometry.location.lng()
              }}
              icon={{
                url: pin,
                anchor: new google.maps.Point(20, 20),
                scaledSize: new google.maps.Size(40, 40)
              }}
            />
          ))}
          <InfoWindow
            onClose={() => console.log("close")}
            marker={activeMarker}
            visible={visisble}
          >
            <div>
              <h1>{selectedPlace && selectedPlace.title}</h1>
              <h1>{selectedPlace && selectedPlace.label}</h1>
            </div>
          </InfoWindow>
          <Circle
            center={mapOptions.initialCenter}
            strokeColor="#4da0ff"
            fillColor="#4da0ff"
            strokeOpacity={0.1}
            fillOpacity={0.1}
            strokeWeight={3}
            radius={1609.34}
          />
        </Map>
      </div>
      <Menu items={testPlaces} type="Bar" />
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_KEY}`,
  libraries: ["places"],
  region: "GB"
})(MapContainer);
