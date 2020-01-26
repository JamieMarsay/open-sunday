import React, { FunctionComponent } from "react";
import Typography from "@Components/Typography/Typography";
import Link from "@Components/Link/Link";

const FourOhFour: FunctionComponent = () => (
  <section className="flex flex--centre flex--v-centre flex--stack height--100">
    <Typography text="404" variant="h1" className="m--bottom-md" />
    <Typography
      text="Something has gone terribly wrong..."
      className="m--bottom-md"
    />
    <Link children="Go home" href="/home" ariaLabel="Go back home" />
  </section>
);

export default FourOhFour;
