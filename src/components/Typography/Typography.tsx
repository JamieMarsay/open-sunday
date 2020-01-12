import React, { FunctionComponent } from "react";
import { ITypography } from "./ITypography";
import "./Typography.scss";
import clsx from "clsx";

const Typography: FunctionComponent<ITypography> = ({
  variant = "p",
  capitalise,
  text,
  bold
}) => {
  const Tag = variant;

  return (
    <Tag
      className={clsx({
        "text--bold": bold,
        "text--capitalise": capitalise
      })}
    >
      {text}
    </Tag>
  );
};

export default Typography;
