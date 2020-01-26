import React from "react";
import Link from "@Components/Link/Link";
import "./Credit.scss";

const Credit = () => (
  <span className="credit p--all-s border--rounded flex slide--right shadow--primary">
    Made by
    <Link
      href="https://www.jamiemarsay.uk"
      ariaLabel="Jamie Marsay website"
      className="p--left-xs"
      children="Jamie"
    />
  </span>
);

export default Credit;
