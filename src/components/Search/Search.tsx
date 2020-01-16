import React, { useState } from "react";
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
        <h2>Open Sunday</h2>
        <p>
          I'm looking for a
          <Select options={["Bar", "Doctor"]} action={selectType} />
          near <Input placeholder="Postcode" action={handlePostcode} />
        </p>

        {postcode.length && !isValidPostcode(postcode) ? (
          <p>Please enter a valid, UK post code </p>
        ) : null}
        {/* 
        {type.length && postcode.length && isValidPostcode(postcode) ? (
          <a
            href={`/results/${type.toLowerCase()}/${postcode.toLowerCase()}`}
          >{`Search for ${type}!`}</a>
        ) : null} */}
        <button disabled={!isValidPostcode(postcode)}>Go!</button>
      </div>
    </div>
  );
};

export default Search;
