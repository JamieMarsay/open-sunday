import React, { useState, FunctionComponent } from "react";
import {
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  Circle,
  Map
} from "google-maps-react";
import Typography from "@Components/Typography/Typography";
import { mapOptions, isDesktop } from "@Utils/constants";
import Spinner from "@Components/Spinner/Spinner";
import { placeLookup } from "@Utils/placeLookup";
import Menu from "@Components/Menu/Menu";
import Link from "@Components/Link/Link";
import pin from "@Assets/pin.svg";

interface IMap {
  searchLocation: any;
  businessType: any;
  google: any;
}

const MapContainer: FunctionComponent<IMap> = ({
  businessType,
  searchLocation,
  google
}) => {
  const [finalBusinesses, setFinalBusinesses] = useState([]);
  const [loading, toggleLoading] = useState(false);
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
    toggleLoading(true);
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const geocoder = new google.maps.Geocoder();

    const setLocation: any = () =>
      new Promise((res: any) => {
        geocoder.geocode(
          {
            address: searchLocation
          },
          (results: any, status: any) => {
            setLatLng(results[0].geometry.location);
            map.setCenter(results[0].geometry.location);
            map.setZoom(
              isDesktop ? mapOptions.desktopZoom : mapOptions.mobileZoom
            );
            res(results[0].geometry.location);
          }
        );
      });

    const location = await setLocation();

    const getNearbyBusinesses: any = () =>
      new Promise((res: any) => {
        service.nearbySearch(
          {
            location: { lat: location.lat(), lng: location.lng() },
            radius: 1609.34,
            type: [`${placeExtras.placesType}`]
          },
          (results: any) => {
            res(results);
          }
        );
      });

    const nearbyBusinesses = await getNearbyBusinesses();

    const getOpeningTimes = (business: any) =>
      new Promise(res =>
        service.getDetails(
          {
            placeId: business.place_id,
            fields: [
              "name",
              "geometry",
              "place_id",
              "opening_hours",
              "website",
              "url",
              "formatted_phone_number"
            ]
          },
          (place: any) => res(place)
        )
      );

    const setOpeningTimes: any = () =>
      new Promise(async (res: any) => {
        const need = await nearbyBusinesses.reduce(
          async (acc: any, business: any) => {
            let asyncAcc = await acc;

            return new Promise(async res => {
              const result = await getOpeningTimes(business);
              res(
                [...asyncAcc, result].filter(
                  (item: any) =>
                    item !== null &&
                    item.opening_hours &&
                    item.opening_hours.periods[6]
                )
              );
            });
          },
          []
        );
        res(need);
      });

    setFinalBusinesses(await setOpeningTimes());
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
        >
          {loading ? (
            <Spinner />
          ) : (
            finalBusinesses.map((i: any, index: number) => (
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
          {latLng ? (
            <Circle
              center={{ lat: latLng.lat(), lng: latLng.lng() }}
              strokeColor="#4da0ff"
              fillColor="#4da0ff"
              strokeOpacity={0.1}
              fillOpacity={0.1}
              strokeWeight={3}
              radius={1609.34}
            />
          ) : null}
        </Map>
      </div>
      {latLng && !loading ? (
        <Menu
          title={
            finalBusinesses.length > 0
              ? `${finalBusinesses.length} ${placeExtras.plural} found! 🥳`
              : `No ${placeExtras.plural} found! 😔`
          }
          items={finalBusinesses}
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
