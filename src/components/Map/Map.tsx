import React, { useState, FunctionComponent, Fragment } from "react";
// @ts-ignore
import { Map, Marker, GoogleApiWrapper, Circle } from "google-maps-react";
import home from "@Assets/home.svg";

interface IMap {
  google: any;
}
const MapContainer: FunctionComponent<IMap> = ({ google }) => {
  const [test, setTest] = useState([]);
  const [latLng, setLatLng] = useState();

  const fetchPlaces = async (mapProps: any, map: any) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const geocoder = new google.maps.Geocoder();
    const postCode = "ls8 2ap";

    const test2: any = () =>
      new Promise((res: any) => {
        geocoder.geocode(
          {
            address: postCode
          },
          (results: any, status: any) => {
            setLatLng(results[0].geometry.location);
            map.setCenter(results[0].geometry.location);
            map.setZoom(14);
            res(results[0].geometry.location);
          }
        );
      });

    const location = await test2();

    const test3: any = () =>
      new Promise((res: any) => {
        service.nearbySearch(
          {
            location: { lat: location.lat(), lng: location.lng() },
            radius: 1609.34,
            type: ["bar"]
          },
          (results: any) => {
            res(results);
          }
        );
      });

    const allBusinesses = await test3();

    const test4: any = () =>
      new Promise(async (res: any) => {
        const need = await allBusinesses.reduce(
          async (acc: any, business: any) => {
            let asyncAcc = await acc;

            return new Promise(async res => {
              const result = await test5(business);
              res([...asyncAcc, result]);
            });
          },
          []
        );
        res(need);
      });

    const test5 = (business: any) =>
      new Promise(res =>
        service.getDetails(
          {
            placeId: business.place_id,
            fields: ["name", "geometry", "place_id", "opening_hours"]
          },
          (place: any) => res(place)
        )
      );

    const allBusinessesWithHours = await test4();
    const finalBusinesses = allBusinessesWithHours.filter(
      (item: any) => item !== null
    );
    const openSunday = finalBusinesses.filter(
      (item: any) => item.opening_hours && item.opening_hours.periods[6]
    );
    setTest(openSunday);
  };

  return (
    <Map
      style={{ maxWidth: "1440px", height: "100%" }}
      onReady={fetchPlaces}
      initialCenter={{
        lat: 51.509865,
        lng: -0.118092
      }}
      google={google}
      zoom={5}
    >
      {test.map((i: any, index: number) => (
        <Marker
          key={i.place_id}
          title={i.name}
          name={i.name}
          position={{
            lat: i.geometry.location.lat(),
            lng: i.geometry.location.lng()
          }}
        />
      ))}
      {latLng ? (
        <Marker
          title="You"
          position={{
            lat: latLng.lat(),
            lng: latLng.lng()
          }}
          style={{ backgroundColor: "blue" }}
          ico={{
            url: home,
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
        />
      ) : null}
      {latLng ? (
        <Circle
          center={{ lat: latLng.lat(), lng: latLng.lng() }}
          radius={1609.34}
          strokeColor="red"
          // onMouseover={() => console.log("mouseover")}
          // onClick={() => console.log("click")}
          // onMouseout={() => console.log("mouseout")}
          strokeOpacity={0}
          strokeWeight={5}
          fillColor="#FF0000"
          fillOpacity={0.2}
        />
      ) : null}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
  libraries: ["places"],
  region: "GB"
})(MapContainer);
