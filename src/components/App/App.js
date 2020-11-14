import React, { useEffect } from "react";
import "./App.scss";

export default function Search(props) {
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
            props.setTitle(event.target.value);
            props.setSearching(true);
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
