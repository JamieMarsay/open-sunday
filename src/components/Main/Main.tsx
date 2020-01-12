import React, { FunctionComponent } from "react";
import Navigation from "@Components/Navigation/Navigation";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main">
    <Navigation />
    <div className="main__inner fade--in">
      <Current />
    </div>
  </main>
);

export default Main;
