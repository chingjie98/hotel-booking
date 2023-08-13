import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';


const Header = () => {

  const [openDate, setOpenDate] = useState(false);
  
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [options, setOptions] = useState({
    adults : 2,
    children : 2,
    room: 1
  });
  
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerListItems">
            <div className="headerListItem active">
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

          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account</p>
          <button className="headerButton">Sign in / Register</button>


          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon className = 'headerSearchIcon' icon={faBed} />    
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon className = 'headerSearchIcon' icon={faCalendarDays} /> 
              <span onClick={() => {setOpenDate(!openDate)}}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className = "date"
              />}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon className = 'headerSearchIcon' icon={faPerson} /> 
              <span>{options.adults} adults {options.children} children {options.room} room</span>
              <div className="headerQuantity">
                  <div className="options">
                    <span>Adults</span>
                    <div className="optionsButtonContainer">
                      <button onClick = {() => {
                        setOptions({...options, adults : options.adults - 1})
                      }}>-</button>
                      <span>{options.adults}</span>
                      <button onClick = {() => {
                        setOptions({...options, adults : options.adults + 1})
                      }}>+</button>
                    </div>
                  </div>
                  <div className="options">
                    <span>Children</span>
                      <div className="optionsButtonContainer">
                      <button onClick = {() => {
                        setOptions({...options, children : options.children - 1})
                      }}>-</button>
                      <span>{options.children}</span>
                      <button onClick = {() => {
                        setOptions({...options, children : options.children + 1})
                      }}>+</button>
                    </div>
                  </div>
                  <div className="options">
                    <span>Room</span>
                    <div className="optionsButtonContainer">
                      <button onClick = {() => {
                        setOptions({...options, room : options.room - 1})
                      }}>-</button>
                      <span>{options.room}</span>
                      <button onClick = {() => {
                        setOptions({...options, room : options.room + 1})
                      }}>+</button>
                    </div>
                  </div>
            </div>
          </div>
            <div className="headerSearchItem">
              <button className = 'headerSearchButton'>Search</button>  
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
