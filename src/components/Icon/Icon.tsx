import React, { FunctionComponent } from "react";
import { IIcon } from "./IIcon";
import "./Icon.scss";

const Icon: FunctionComponent<IIcon> = ({ src, alt }) => {
  return <img className="icon" src={src} alt={alt} />;
};

export default Icon;
