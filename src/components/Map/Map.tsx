// import React, { useState, FunctionComponent, useEffect, Fragment } from "react";
// import {
//   Map,
//   Marker,
//   GoogleApiWrapper,
//   Circle,
//   InfoWindow
// } from "google-maps-react";
// import Spinner from "@Components/Spinner/Spinner";
// import pin from "@Assets/pin.svg";

// interface IMap {
//   google: any;
// }
// const MapContainer: FunctionComponent<IMap> = ({ google }) => {
//   const [finalBusinesses, setFinalBusinesses] = useState([]);
//   const [loading, toggleLoading] = useState(false);
//   const [latLng, setLatLng] = useState();

//   const fetchPlaces = async (mapProps: any, map: any) => {
//     const { google } = mapProps;
//     const service = new google.maps.places.PlacesService(map);
//     const geocoder = new google.maps.Geocoder();
//     const postCode = "ls18 5aa";

//     const setLocation: any = () =>
//       new Promise((res: any) => {
//         geocoder.geocode(
//           {
//             address: postCode
//           },
//           (results: any, status: any) => {
//             setLatLng(results[0].geometry.location);
//             map.setCenter(results[0].geometry.location);
//             map.setZoom(14);
//             res(results[0].geometry.location);
//           }
//         );
//       });

//     const location = await setLocation();

//     const getNearbyBusinesses: any = () =>
//       new Promise((res: any) => {
//         service.nearbySearch(
//           {
//             location: { lat: location.lat(), lng: location.lng() },
//             radius: 1609.34,
//             type: ["bar"]
//           },
//           (results: any) => {
//             res(results);
//           }
//         );
//       });

//     const nearbyBusinesses = await getNearbyBusinesses();

//     const getOpeningTimes = (business: any) =>
//       new Promise(res =>
//         service.getDetails(
//           {
//             placeId: business.place_id,
//             fields: ["name", "geometry", "place_id", "opening_hours"]
//           },
//           (place: any) => res(place)
//         )
//       );

//     const setOpeningTimes: any = () =>
//       new Promise(async (res: any) => {
//         const need = await nearbyBusinesses.reduce(
//           async (acc: any, business: any) => {
//             let asyncAcc = await acc;

//             return new Promise(async res => {
//               const result = await getOpeningTimes(business);
//               res(
//                 [...asyncAcc, result].filter(
//                   (item: any) =>
//                     item !== null &&
//                     item.opening_hours &&
//                     item.opening_hours.periods[6]
//                 )
//               );
//             });
//           },
//           []
//         );
//         res(need);
//       });

//     setFinalBusinesses(await setOpeningTimes());
//     toggleLoading(false);
//   };

//   return (
//     <div style={{ position: "relative", height: "100vh" }}>
//       <div className={`${loading ? "opacity--none" : "fade--in"}`}>
//         <Map
//           style={{ maxWidth: "1440px", height: "100%" }}
//           // onReady={fetchPlaces}
//           onReady={() => console.log("test")}
//           fullscreenControl={false}
//           streetViewControl={false}
//           mapTypeControl={false}
//           zoomControl={false}
//           // styles={[
//           //   {
//           //     featureType: "administrative",
//           //     elementType: "all",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         lightness: -100
//           //       },
//           //       {
//           //         visibility: "off"
//           //       },
//           //       {
//           //         saturation: "-77"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "administrative",
//           //     elementType: "labels.text.fill",
//           //     stylers: [
//           //       {
//           //         visibility: "on"
//           //       },
//           //       {
//           //         color: "#848ea4"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "landscape",
//           //     elementType: "geometry",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "-70"
//           //       },
//           //       {
//           //         lightness: "0"
//           //       },
//           //       {
//           //         visibility: "on"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "landscape",
//           //     elementType: "geometry.fill",
//           //     stylers: [
//           //       {
//           //         hue: "#0050ff"
//           //       },
//           //       {
//           //         saturation: "0"
//           //       },
//           //       {
//           //         lightness: "0"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "landscape",
//           //     elementType: "labels",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "-80"
//           //       },
//           //       {
//           //         lightness: "-90"
//           //       },
//           //       {
//           //         visibility: "off"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "poi",
//           //     elementType: "all",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "-80"
//           //       },
//           //       {
//           //         lightness: "-70"
//           //       },
//           //       {
//           //         visibility: "off"
//           //       },
//           //       {
//           //         gamma: "1"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "road",
//           //     elementType: "geometry",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "-85"
//           //       },
//           //       {
//           //         lightness: "60"
//           //       },
//           //       {
//           //         visibility: "on"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "road",
//           //     elementType: "labels",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "-70"
//           //       },
//           //       {
//           //         lightness: "50"
//           //       },
//           //       {
//           //         visibility: "off"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "road.local",
//           //     elementType: "all",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         saturation: "0"
//           //       },
//           //       {
//           //         lightness: "-11"
//           //       },
//           //       {
//           //         visibility: "on"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "transit",
//           //     elementType: "geometry",
//           //     stylers: [
//           //       {
//           //         visibility: "simplified"
//           //       },
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         lightness: "0"
//           //       },
//           //       {
//           //         saturation: "0"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "transit",
//           //     elementType: "labels",
//           //     stylers: [
//           //       {
//           //         hue: "#0060ff"
//           //       },
//           //       {
//           //         lightness: -100
//           //       },
//           //       {
//           //         visibility: "off"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "water",
//           //     elementType: "geometry",
//           //     stylers: [
//           //       {
//           //         hue: "#0066ff"
//           //       },
//           //       {
//           //         saturation: "0"
//           //       },
//           //       {
//           //         lightness: 100
//           //       },
//           //       {
//           //         visibility: "on"
//           //       }
//           //     ]
//           //   },
//           //   {
//           //     featureType: "water",
//           //     elementType: "labels",
//           //     stylers: [
//           //       {
//           //         hue: "#000000"
//           //       },
//           //       {
//           //         saturation: -100
//           //       },
//           //       {
//           //         lightness: -100
//           //       },
//           //       {
//           //         visibility: "off"
//           //       }
//           //     ]
//           //   }
//           // ]}
//           initialCenter={{
//             lat: 51.509865,
//             lng: -0.118092
//           }}
//           google={google}
//           zoom={5}
//         >
//           <Marker
//             title="you"
//             icon={{
//               url: pin,
//               anchor: new google.maps.Point(20, 20),
//               scaledSize: new google.maps.Size(40, 40)
//             }}
//           >
//             <InfoWindow
//               // anchor={1}
//               visible={true}
//               google={google}
//               map={google.map}
//               marker={google.marker}
//             >
//               <div style={{ backgroundColor: "red" }}>test</div>
//             </InfoWindow>
//           </Marker>

//           {finalBusinesses.map((i: any, index: number) => (
//             <Marker
//               key={i.place_id}
//               title={i.name}
//               position={{
//                 lat: i.geometry.location.lat(),
//                 lng: i.geometry.location.lng()
//               }}
//               icon={{
//                 url: pin,
//                 anchor: new google.maps.Point(20, 20),
//                 scaledSize: new google.maps.Size(40, 40)
//               }}
//             />
//           ))}
//           {latLng && finalBusinesses.length > 0 ? (
//             <Circle
//               center={{ lat: latLng.lat(), lng: latLng.lng() }}
//               fillColor="#4da0ff"
//               strokeColor="#4da0ff"
//               fillOpacity={0.1}
//               strokeOpacity={0.1}
//               strokeWeight={3}
//               radius={1609.34}
//             />
//           ) : null}
//         </Map>
//       </div>
//       {loading ? <Spinner /> : null}
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: `${process.env.REACT_APP_MAPS_KEY}`,
//   libraries: ["places"],
//   region: "GB"
// })(MapContainer);
