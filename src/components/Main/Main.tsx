import React, { FunctionComponent } from "react";
import Credit from "@Components/Credit/Credit";
import { IMain } from "./IMain";
import "./Main.scss";

const Main: FunctionComponent<IMain> = ({ Current }) => (
  <main className="main fade--in pos--rel">
    <Credit />
    <Current />
  </main>
);

export default Main;
