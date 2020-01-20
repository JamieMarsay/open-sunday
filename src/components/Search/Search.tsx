import React, { useState } from "react";
import Typography from "@Components/Typography/Typography";
import { AnchorButton } from "@Components/Buttons/Buttons";
import Select from "@Components/Select/Select";
import Input from "@Components/Input/Input";
import "./Search.scss";

const Search = () => {
  const [type, setType] = useState("Bar");
  const [postcode, setPostcode] = useState("");

  const selectType = (e?: any) => {
    setType(e.target.value);
  };

  const handlePostcode = (e?: any) => {
    setPostcode(e.target.value);
  };

  const isValidPostcode = (p: string) => {
    var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    return postcodeRegEx.test(p) && p.length <= 8;
  };

  return (
    <div className="search">
      <div>
        <Typography
          className="m--bottom-xxl"
          text="Open Sunday"
          variant="h1"
          size="large"
        />
        <p className="m--bottom-xxl">
          I'm looking for a
          <Select
            className="m--left-s m--right-s"
            options={["Bar", "Doctor"]}
            action={selectType}
          />
          near{" "}
          <Input
            className="m--left-s m--right-s"
            action={handlePostcode}
            placeholder="Postcode"
          />
        </p>
        <AnchorButton
          text="Search!"
          href={
            type.length && isValidPostcode(postcode)
              ? `/results/${type.toLowerCase()}/${postcode.toLowerCase()}`
              : ""
          }
          className="centre"
        />
      </div>
    </div>
  );
};

export default Search;
