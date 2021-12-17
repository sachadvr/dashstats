import React, { useState } from "react";
import "./Main.scss";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Gridlist from "../Grid/Gridlist.jsx";
import myJson1 from "../../values.json";

const Main = () => {
  const [myJson, setMyJson] = useState(myJson1);

  return (
    <div id="main">
      <div id="homepage">
        <div id="search">
          <i className="fas fa-search"></i>
          <SearchBar setjson={setMyJson} json={myJson} />
          <div id="results">
            <Gridlist json={myJson} type="list" />
          </div>
        </div>

        <div id="toppanel">
          <p>Bonjour Sacha</p>
          <span>De retour parmis-nous?</span>
          <div id="btn">
            <a href="index.html">Filtres </a>
            <i className="fas fa-sliders-h"></i>
          </div>
        </div>
        <div id="secondpanel">
          <div id="grid">
            <Gridlist json={myJson} type="grid" />
          </div>
        </div>
      </div>
      <div id="rightsidebar">
        <p>Sales</p>
      </div>
    </div>
  );
};

export default Main;
