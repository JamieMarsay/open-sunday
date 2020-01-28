import React, { useState, FunctionComponent } from "react";
import {
  GoogleApiWrapper,
  InfoWindow,
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
import Link from "@Components/Link/Link";
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
          onClick={() => setVisible(false)}
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
                // @ts-ignore
                details={{
                  number: i.formatted_phone_number,
                  website: i.website,
                  url: i.url
                }}
                position={{
                  lat: i.geometry.location.lat(),
                  lng: i.geometry.location.lng()
                }}
                icon={{
                  url: pin,
                  anchor: new google.maps.Point(20, 20),
                  scaledSize: new google.maps.Size(40, 40)
                }}
                onClick={onMarkerClick}
                key={i.place_id}
                title={i.name}
              />
            ))
          )}
          {selectedPlace && (
            <InfoWindow
              marker={activeMarker}
              visible={visisble}
              google={google}
              // @ts-ignore
              map={null}
            >
              <div className="m--all-s width--max-250">
                <Typography
                  text={selectedPlace.title}
                  variant="h3"
                  className="m--bottom-s"
                />
                {selectedPlace.details.number ? (
                  <Link
                    ariaLabel={`Phone number ${selectedPlace.details.number}`}
                    children={`Phone: ${selectedPlace.details.number}`}
                    href={`tel:${selectedPlace.details.number}`}
                    className="m--bottom-s"
                  />
                ) : (
                  <Typography text="No number found" className="m--bottom-s" />
                )}
                <Link
                  href={`${selectedPlace.details?.website ||
                    selectedPlace.details.url}`}
                  ariaLabel="Business website"
                  children={
                    selectedPlace.details.website
                      ? "Visit website"
                      : "View on Google Maps"
                  }
                />
              </div>
            </InfoWindow>
          )}
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
  apiKey: "AIzaSyA8RET0mps3dz6mCCSmxlcxfDI-LcKyBco",
  LoadingContainer: Spinner,
  libraries: ["places"],
  region: "GB"
})(MapContainer);
