import React, { FunctionComponent, ChangeEvent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { AnchorButton } from "@Components/Buttons/Buttons";
import { postcodeChecker } from "@Utils/postcodeChecker";
import { allPlaceTypes } from "@Utils/allPlaceTypes";
import Select from "@Components/Select/Select";
import Input from "@Components/Input/Input";
import "./Search.scss";

const Search: FunctionComponent = () => {
  const [type, setType] = useState(allPlaceTypes[0]);
  const [postcode, setPostcode] = useState("");

  const selectType = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handlePostcode = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  return (
    <div className="search centre">
      <Typography text="Open Sunday" variant="h1" className="m--bottom-xl" />
      <div className="search__inner m--bottom-xl">
        <Typography text="I'm looking for a" className="m--all-s" />
        <Select
          options={allPlaceTypes}
          onChange={selectType}
          className="m--all-s"
        />
        <Typography text="near" className="m--all-s" />
        <Input
          action={handlePostcode}
          placeholder="Postcode"
          className="m--all-s"
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
