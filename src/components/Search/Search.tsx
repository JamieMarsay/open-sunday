import React, { FunctionComponent, ChangeEvent, useState } from "react";
import Typography from "@Components/Typography/Typography";
import { Button } from "@Components/Buttons/Buttons";
import { postcodeChecker } from "@Utils/postcodeChecker";
import { placeLookup } from "@Utils/placeLookup";
import Select from "@Components/Select/Select";
import { withRouter } from "react-router-dom";
import Input from "@Components/Input/Input";
import { ISearch } from "./ISearch";
import "./Search.scss";

const Search: FunctionComponent<ISearch> = ({ history }) => {
  const [type, setType] = useState(Object.keys(placeLookup)[0]);
  const [postcode, setPostcode] = useState("");
  const [hasErrors, setErrors] = useState(false);

  const selectType = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handlePostcode = (event: ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  const submitQuery = () => {
    if (postcodeChecker(postcode)) {
      history.push(`/results/${type}/${postcode.toLowerCase()}`);
    } else {
      setErrors(true);
    }
  };

  return (
    <div className="search">
      <Typography text="Open Sunday" variant="h1" className="m--bottom-xl" />
      <div className="search__inner m--bottom-xl">
        <Typography text="I'm looking for a" className="m--all-s" />
        <Select
          options={Object.keys(placeLookup).map(key => key)}
          onChange={selectType}
          className="m--all-s"
        />
        <Typography text="near" className="m--all-s" />
        <Input
          intent={hasErrors ? "error" : false}
          action={handlePostcode}
          placeholder="Postcode"
          className="m--all-s"
        />
      </div>
      {hasErrors ? (
        <Typography
          text="Please enter a valid UK postcode!"
          className="m--bottom-lg"
          bold
        />
      ) : null}
      <Button action={() => submitQuery()} text="Search!" />
    </div>
  );
};

export default withRouter(Search);
