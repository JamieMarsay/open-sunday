import React, { FunctionComponent } from "react";
import { IGrid } from "./IGrid";
import "./Grid.scss";

const Grid: FunctionComponent<IGrid> = ({ cols, children }) => (
  <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
    {children}
  </div>
);

export default Grid;
