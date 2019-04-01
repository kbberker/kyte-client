import React, { Component } from "react";
import FlightOffer from "./FlightOffer";

// TODO Can maybe turn into functional component

class FlightResults extends Component {
  state = {};

  renderFlightOffers = () => {
    const { searchResults } = this.props;
    const offers = searchResults.offers;
    const flights = searchResults.flights;

    const flightOffers = this.listOfFlightOffers(flights, offers);

    return flightOffers;
    // For each offer
    // find departing flight details
    // find return flight details
    // find the total price
    // send that info to a FlightOfferComponent
  };

  listOfFlightOffers = (flights, offers) => {
    return offers.map(offer => {
      // console.log(flights, offers);
      const departureJourney = flights.filter(
        flight => flight.id === offer.journeys[0].flightIds[0]
      )[0];
      const returnJourney = flights.filter(
        flight => flight.id === offer.journeys[1].flightIds[0]
      )[0];
      const totalPrice = offer.totalPrice.amount;
      const passengers = offer.passengers;

      return (
        <FlightOffer
          depJourney={departureJourney}
          retJourney={returnJourney}
          totalPrice={totalPrice}
          passengers={passengers}
        />
      );
    });
  };

  render() {
    return <div>{this.renderFlightOffers()}</div>;
  }
}

export default FlightResults;
