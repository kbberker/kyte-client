import React, { Component } from "react";
import FlightSearch from "./FlightSearch";
import FlightResults from "./FlightResults";
import "./App.css";

class App extends Component {
  state = {
    searchResults: null
  };

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
      .then(data => {
        console.log(data);
        this.setState({ searchResults: data[1] });
      });
  };

  render() {
    return (
      <div className="App">
        <FlightSearch search={this.searchForFlights} />
        {this.state.searchResults !== null ? (
          <FlightResults searchResults={this.state.searchResults} />
        ) : null}
      </div>
    );
  }
}

export default App;
