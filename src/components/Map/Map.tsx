import React, { useState, FunctionComponent } from "react";
// @ts-ignore
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

interface IMap {
  google: any;
}
const MapContainer: FunctionComponent<IMap> = ({ google }) => {
  console.count("render");
  const [test, setTest] = useState([]);

  const fetchPlaces = async (mapProps: any, map: any) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const geocoder = new google.maps.Geocoder();
    const postCode = "wf1 2hz";

    const test2: any = () =>
      new Promise((res: any) => {
        geocoder.geocode(
          {
            address: postCode
          },
          (results: any, status: any) => {
            map.setCenter(results[0].geometry.location);
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
            type: ["pharmacy"]
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
    // setTest(
    //   allBusinessesWithHours.filter(
    //     (item: any) => item !== null || !item.opening_hours.periods[6]
    //   )
    // );
  };

  return (
    <Map google={google} zoom={14} onReady={fetchPlaces}>
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
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_KEY,
  libraries: ["places"],
  region: "GB"
})(MapContainer);
