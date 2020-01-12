import React, { useContext, FunctionComponent } from "react";
import { IHomeBody } from "./IHome";

const HomeBody: FunctionComponent<IHomeBody> = ({ bodyContext }) => {
  const [test] = useContext(bodyContext);

  if (!Object.keys(test).length) return null;

  return <div>test</div>;
};

export default HomeBody;
