import React, { Component, Fragment } from "react";

class FlightOffer extends Component {
  state = {};

  offerCard = () => {
    const { depJourney, retJourney, totalPrice, passengers } = this.props;
    // debugger;

    return (
      <div className="offer-card">
        <div className="journey-info">
          <h3>Outbound</h3>
          <div>
            <h4>Depart:</h4>
            <h4>{depJourney.flightSegments[0].departure.airportCode}</h4>
            <h4>{depJourney.flightSegments[0].departure.time}</h4>
          </div>
          <div>
            <h4>Arrive:</h4>
            <h4>{depJourney.flightSegments[0].arrival.airportCode}</h4>
            <h4>{depJourney.flightSegments[0].arrival.time}</h4>
          </div>
        </div>
        <div className="journey-info">
          <h3>Return</h3>
          <div>
            <h4>Depart:</h4>
            <h4>{retJourney.flightSegments[0].departure.airportCode}</h4>
            <h4>{retJourney.flightSegments[0].departure.time}</h4>
          </div>
          <div>
            <h4>Arrive:</h4>
            <h4>{retJourney.flightSegments[0].arrival.airportCode}</h4>
            <h4>{retJourney.flightSegments[0].arrival.time}</h4>
          </div>
        </div>
        <h4>Total Price: £{totalPrice}</h4>
      </div>
    );
  };

  render() {
    return <Fragment>{this.offerCard()}</Fragment>;
  }
}

export default FlightOffer;
