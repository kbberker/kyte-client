import React, { Component } from "react";

class FlightSearch extends Component {
  state = {
    departureAirport: "LGW",
    arrivalAirport: "BCN"
  };

  handleDepartureChange = event => {
    this.setState({
      departureAirport: event.target.value,
      arrivalAirport: event.target.value === "LGW" ? "BCN" : "LGW"
    });
  };

  render() {
    return (
      <div>
        <h1>FIND FLIGHTS!</h1>
        <div>
          <h4>Departure Airport: </h4>
          <div>
            <label>
              <input
                type="radio"
                name="departureAirport"
                value="LGW"
                checked={this.state.departureAirport === "LGW"}
                onChange={this.handleDepartureChange}
              />
              London Gatwick
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="departureAirport"
                value="BCN"
                checked={this.state.departureAirport === "BCN"}
                onChange={this.handleDepartureChange}
              />
              Barcelona
            </label>
          </div>
        </div>
        <div>
          <h4>Destination:</h4>
          {this.state.arrivalAirport === "LGW" ? (
            <h5>London Gatwick</h5>
          ) : (
            <h5>Barcelona</h5>
          )}
        </div>
      </div>
    );
  }
}

export default FlightSearch;
