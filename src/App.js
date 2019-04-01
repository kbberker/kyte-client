import React, { Component } from "react";
import FlightSearch from "./FlightSearch";
import FlightResults from "./FlightResults";
import "./App.css";
import logo from "./img/logo@2x.png";

class App extends Component {
  state = {
    searchResults: null,
    loading: false
  };

  searchForFlights = searchData => {
    this.setState({ loading: true }, () => {
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
          this.setState({
            searchResults: data[1],
            departureDate: searchData.departureDate.toISOString().slice(0, 10),
            returnDate: searchData.returnDate.toISOString().slice(0, 10),
            loading: false
          });
        });
    });
  };

  render() {
    const { searchResults, departureDate, returnDate, loading } = this.state;

    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <FlightSearch search={this.searchForFlights} disableButton={loading} />
        {this.state.searchResults !== null ? (
          <FlightResults
            searchResults={searchResults}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
