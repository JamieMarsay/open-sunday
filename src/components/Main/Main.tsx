import React, { FunctionComponent } from "react";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main fade--in">
    <Current />
  </main>
);

export default Main;
