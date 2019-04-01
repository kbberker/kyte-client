import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class FlightSearch extends Component {
  state = {
    departureAirport: "LGW",
    arrivalAirport: "BCN",
    departureDate: new Date(),
    returnDate: new Date(),
    numOfPass: "1"
  };

  handleDepartureChange = event => {
    this.setState({
      departureAirport: event.target.value,
      arrivalAirport: event.target.value === "LGW" ? "BCN" : "LGW"
    });
  };

  // TODO use >>> date.toISOString().slice(0, 10) before making fetch req

  handleDepartureDateChange = date => {
    // debugger;
    this.setState({ departureDate: date });
  };

  handleReturnDateChange = date => {
    this.setState({ returnDate: date });
  };

  handleNumOfPass = event => {
    this.setState({ numOfPass: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>FIND FLIGHTS!</h1>
        <div>
          <h4>From: </h4>
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
          <div>
            <h6>Date of Departure</h6>
            <DatePicker
              dateFormat="dd/MM/yy"
              minDate={new Date()}
              shouldCloseOnSelect={false}
              selected={this.state.departureDate}
              onChange={this.handleDepartureDateChange}
            />
          </div>
        </div>
        <div>
          <h4>Destination:</h4>
          {this.state.arrivalAirport === "LGW" ? (
            <h5>London Gatwick</h5>
          ) : (
            <h5>Barcelona</h5>
          )}
          <h6>Return Date</h6>
          <DatePicker
            dateFormat="dd/MM/yy"
            minDate={this.state.departureDate}
            shouldCloseOnSelect={false}
            selected={this.state.returnDate}
            onChange={this.handleReturnDateChange}
          />
        </div>
        <div>
          <h6>Number of Passengers</h6>
          <select onChange={this.handleNumOfPass}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <button onClick={() => this.props.search(this.state)}>SEARCH</button>
        </div>
      </div>
    );
  }
}

export default FlightSearch;
