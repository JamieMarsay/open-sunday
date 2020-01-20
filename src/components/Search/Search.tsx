import React, { useState } from "react";
import Typography from "@Components/Typography/Typography";
import { AnchorButton } from "@Components/Buttons/Buttons";
import { postcodeChecker } from "@Utils/postcodeChecker";
import { allPlaceTypes } from "@Utils/allPlaceTypes";
import Select from "@Components/Select/Select";
import Input from "@Components/Input/Input";
import "./Search.scss";

const Search = () => {
  const [type, setType] = useState(allPlaceTypes[0]);
  const [postcode, setPostcode] = useState("");

  const selectType = (e?: any) => {
    setType(e.target.value);
  };

  const handlePostcode = (e?: any) => {
    setPostcode(e.target.value);
  };

  return (
    <div className="search">
      <div className="flex flex--v-centre m--bottom-xxl">
        <Typography text="I'm looking for a" />
        <Select
          className="m--left-s m--right-s"
          options={allPlaceTypes}
          action={selectType}
        />
        <Typography text="near" />
        <Input
          className="m--left-s m--right-s"
          action={handlePostcode}
          placeholder="Postcode"
        />
      </div>
      <AnchorButton
        href={
          type.length && postcodeChecker(postcode)
            ? `/results/${type.toLowerCase()}/${postcode.toLowerCase()}`
            : ""
        }
        className="centre"
        text="Search!"
      />
    </div>
  );
};

export default Search;
