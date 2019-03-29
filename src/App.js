import React, { Component } from "react";
import FlightSearch from "./FlightSearch";
import FlightResults from "./FlightResults";
import "./App.css";

class App extends Component {
  state = {};

  searchForFlights = searchData => {
    const passenger = { type: "adult" };
    const passengers = [];

    for (let i = 0; i < parseInt(searchData.numOfPass); i++) {
      passengers.push(passenger);
    }

    fetch("http://localhost:3000/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        departureDate: searchData.departureDate.toISOString().slice(0, 10),
        departureAirport: searchData.departureAirport,
        returnDate: searchData.returnDate.toISOString().slice(0, 10),
        arrivalAirport: searchData.arrivalAirport,
        numOfPass: passengers
      })
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <FlightSearch search={this.searchForFlights} />
        {/* <FlightResults /> */}
      </div>
    );
  }
}

export default App;
