import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerListItems">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} /> Stays
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} /> Flights
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} /> Car rentals
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPersonHiking} /> Attractions
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} /> Airport Taxis
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
