import React from "react";
import { useState } from "react";
import CountryData from "./resources/countryData.json";

export default function searchBox() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setInput("");
      console.log("Escape");
    }
  };
  return (
    <div>
      <input
        onChange={handleInput}
        onKeyDown={handleEscape}
        placeholder="Type the place to search"
      />
      <button>Search</button>
      {input && (
        <div>
          {CountryData.filter(
            (city) => city.name.slice(0, input.length).toLowerCase() === input
          ).map((city) => (
            <p key={city.code}>{city.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
