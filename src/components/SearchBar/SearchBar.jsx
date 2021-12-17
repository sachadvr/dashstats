import React from "react";
import Main from "../Main/Main.jsx";
function SearchBar(props) {
  // function change(str) {
  //   let myJson = props.json;
  //   props.setMyJson(myJson.filter((auto) => auto.name.includes(str)));
  // }
  return (
    <input
      type="search"
      id="site-search"
      name="q"
      onChange={(e) => {
        console.log(e.target.value);
      }}
      placeholder="Search here"
      aria-label="Search through site content"></input>
  );
}

export default SearchBar;
