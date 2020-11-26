import React, { useEffect, useState } from "react";
import "./Search.css";
import { searchForId, useDebounce } from "../hooks/useDebounce"

export default function Search(props) {
  const [searchId, setSearchId] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedId = useDebounce(searchId, 1000)

  useEffect(() => {
    if (debouncedId) {
      searchForId(debouncedId, setSearchResults)
    }
  }, [debouncedId, searchId])

  return (
    <form
      className="search_form"
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <h3 className="player_search">Player ID or Name</h3>
      <div className="searchbar">
        <input
          onChange={(event) => {
            setSearchId(event.target.value);
            // props.setSearching(true);
          }}
          name="title"
          type="text"
          placeholder="Enter player id or name to search"
        />
        {/* {props.searching && (
          <>
            <img src="/rotating-arrow.png" alt="None" className="spinner" />
            <label className="searching"> Searching ... </label>
          </>
        )} */}
      </div>
    </form>
  );
}
