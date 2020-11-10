import React from 'react';
import { Segment, Card } from "semantic-ui-react";
import DiaryEntryCard from "./DiaryEntryCard";

const PLACEHOLDER = [
  {
    _id: 1,
    weather: "sunny",
    message: "great day today",
    location: "singapore",
    time: new Date()
  },
  {
    _id: 2,
    weather: "rainy",
    message: "rainy day today",
    location: "singapore",
    time: new Date()
  },
  {
    _id: 3,
    weather: "cloudy",
    message: "great day today",
    location: "singapore",
    time: new Date()
  },
];

class DiaryEntriesGrid extends React.Component {

  renderCards = (cards) => {
    return cards.map((card) => {
      return (
        <DiaryEntryCard
          key={card._id}
          card={card}
        />
      );
    })
  }

  render() {
    return (
      <Segment>
        <h1>Diary entries</h1>
        <Card.Group>
          {this.renderCards(PLACEHOLDER)}
        </Card.Group>
      </Segment>
    );
  }
}

export default DiaryEntriesGrid;
