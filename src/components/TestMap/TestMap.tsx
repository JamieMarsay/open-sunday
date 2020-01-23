import React, { useState, FunctionComponent } from "react";
import {
  GoogleApiWrapper,
  // InfoWindow,
  Marker,
  Circle,
  Map
} from "google-maps-react";
import Typography from "@Components/Typography/Typography";
import { isDesktop, mapOptions } from "@Utils/constants";
import Spinner from "@Components/Spinner/Spinner";
import { placeLookup } from "@Utils/placeLookup";
import { testPlaces } from "@TestData/testData";
import Menu from "@Components/Menu/Menu";
import pin from "@Assets/pin.svg";

interface IMap {
  searchLocation: string;
  businessType: string;
  google: any;
}

const MapContainer: FunctionComponent<IMap> = ({
  searchLocation,
  businessType,
  google
}) => {
  const [finalBusinesses, setFinalBusinesses] = useState([]);
  const [loading, toggleLoading] = useState(true);
  const [latLng, setLatLng] = useState();
  const [activeMarker, setActiveMarker] = useState();
  const [selectedPlace, setSelectedPlace] = useState();
  const [visisble, setVisible] = useState();
  const placeExtras = placeLookup[businessType];

  const onMarkerClick = (props: any, marker: any) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setVisible(true);
  };

  const fetchPlaces = async (mapProps: any, map: any) => {
    // setTimeout(() => toggleLoading(false), 3500);
    map.setCenter(mapOptions.initialCenter);
    map.setZoom(isDesktop ? mapOptions.desktopZoom : mapOptions.mobileZoom);
    toggleLoading(false);
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div className="fade--in">
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
          {loading ? (
            <Spinner />
          ) : (
            testPlaces.map((i: any) => (
              <Marker
                icon={{
                  scaledSize: new google.maps.Size(40, 40),
                  anchor: new google.maps.Point(20, 20),
                  url: pin
                }}
                position={{
                  lat: i.geometry.location.lat(),
                  lng: i.geometry.location.lng()
                }}
                onClick={onMarkerClick}
                key={i.place_id}
                title={i.name}
              />
            ))
          )}
          {/* {selectedPlace && (
            <InfoWindow
              marker={activeMarker}
              visible={visisble}
              google={google}
            >
              <Typography text={selectedPlace.title} variant="h3" />
            </InfoWindow>
          )} */}
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
      {!loading ? (
        <Menu
          title={
            testPlaces.length > 0
              ? `${testPlaces.length} ${placeExtras.plural} found! 🥳`
              : `No ${placeExtras.plural} found! 😔`
          }
          items={testPlaces}
        />
      ) : null}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_KEY}`,
  LoadingContainer: Spinner,
  libraries: ["places"],
  region: "GB"
})(MapContainer);
