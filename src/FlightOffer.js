import React, { Component, Fragment } from "react";

class FlightOffer extends Component {
  state = {};

  flightSegments = (flightSegments, leg) => {
    return flightSegments.map(flightSegment => {
      return (
        <Fragment>
          <h4>{flightSegment[leg].airportCode}</h4>
          <h4>{flightSegment[leg].time}</h4>
        </Fragment>
      );
    });
  };

  offerCard = () => {
    const { outboundJourney, retJourney, totalPrice, passengers } = this.props;
    // debugger;

    return (
      <div className="offer-card">
        <div className="journey-info">
          <h3>Outbound</h3>
          <div>
            <h4>Depart:</h4>
            {this.flightSegments(outboundJourney.flightSegments, "departure")}
          </div>
          <div>
            <h4>Arrive:</h4>
            {this.flightSegments(outboundJourney.flightSegments, "arrival")}
          </div>
        </div>
        <div className="journey-info">
          <h3>Return</h3>
          <div>
            <h4>Depart:</h4>
            {this.flightSegments(retJourney.flightSegments, "departure")}
          </div>
          <div>
            <h4>Arrive:</h4>
            {this.flightSegments(retJourney.flightSegments, "arrival")}
          </div>
        </div>
        <div>
          <h4>Total Price: £{totalPrice}</h4>
          <h4>Passengers: {passengers.length}</h4>
        </div>
      </div>
    );
  };

  render() {
    return <Fragment>{this.offerCard()}</Fragment>;
  }
}

export default FlightOffer;
