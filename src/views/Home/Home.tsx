import React, { FunctionComponent } from "react";
import { AppProvider, AppContext } from "@Context/AppProvider/AppProvider";
import Heading from "@Components/Heading/Heading";
import Select from "@Components/Select/Select";
import Map from "@Components/Map/Map";
import Body from "./HomeBody";

const Home: FunctionComponent = () => (
  <section>
    <Map />

    {/* <Paper title="Select">
          <Select options={["1", "2"]} />
        </Paper>
        <div style={{ height: "500px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={[53.84277, -1.63488]}
            defaultZoom={11}
          />
        </div> */}
  </section>
);

export default Home;
