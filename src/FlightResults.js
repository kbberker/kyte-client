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
  };

  listOfFlightOffers = (flights, offers) => {
    return offers.map(offer => {
      // console.log(flights, offers);
      const outboundJourney = flights.filter(
        flight => flight.id === offer.journeys[0].flightIds[0]
      )[0];
      const returnJourney = flights.filter(
        flight => flight.id === offer.journeys[1].flightIds[0]
      )[0];
      const totalPrice = offer.totalPrice.amount;
      const passengers = offer.passengers;

      return (
        <FlightOffer
          outboundJourney={outboundJourney}
          retJourney={returnJourney}
          totalPrice={totalPrice}
          passengers={passengers}
        />
      );
    });
  };

  render() {
    const { departure, arrival } = this.props.searchResults.destinations[0];
    const { departureDate, returnDate } = this.props;

    return (
      <div>
        <h1>Results</h1>
        <h3>
          From {departure} to {arrival}
        </h3>
        <h3>
          Travel Dates: {departureDate} to {returnDate}
        </h3>
        {this.renderFlightOffers()}
      </div>
    );
  }
}

export default FlightResults;
