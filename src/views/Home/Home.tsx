import React, { FunctionComponent } from "react";
import Heading from "@Components/Heading/Heading";
import Select from "@Components/Select/Select";
import Paper from "@Components/Paper/Paper";

const Home: FunctionComponent = () => (
  <section>
    <Heading title="Open Sunday" />
    <Paper title="Select">
      <Select options={["1", "2"]} />
    </Paper>
  </section>
);

export default Home;
