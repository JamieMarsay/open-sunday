import React, { Fragment } from "react";
import Heading from "@Components/Heading/Heading";
import Paper from "@Components/Paper/Paper";
import { Link } from "react-router-dom";

const FourOhFour = () => (
  <section>
    <Heading
      title="404"
      controls={
        <Fragment>
          <Link to="/" className="m--right-md">
            Return Home
          </Link>
        </Fragment>
      }
    />
    <Paper title="There's not much here...">404</Paper>
  </section>
);

export default FourOhFour;
