import React from "react";
import Link from "@Components/Link/Link";
import "./Credit.scss";

const Credit = () => (
  <span className="credit m--all-md p--all-md border--rounded flex slide--right">
    Made by
    <Link
      href="https://www.jamiemarsay.uk"
      ariaLabel="Jamie Marsay website"
      className="p--left-s"
      children="Jamie"
    />
  </span>
);

export default Credit;
