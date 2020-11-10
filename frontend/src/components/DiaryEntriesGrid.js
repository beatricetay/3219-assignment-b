import React from 'react';
import { Segment, Card } from "semantic-ui-react";
import DiaryEntryCard from "./DiaryEntryCard";

class DiaryEntriesGrid extends React.Component {

  renderCards = () => {
    const { entries } = this.props;
    if (entries) {
      return entries.map((card) => {
        return (
          <DiaryEntryCard
            key={card._id}
            card={card}
            fetchEntries={this.props.fetchEntries}
          />
        );
      })
    }
  }

  render() {
    return (
      <Segment>
        <h1>Diary entries</h1>
        <Card.Group>
          {this.renderCards()}
        </Card.Group>
      </Segment>
    );
  }
}

export default DiaryEntriesGrid;
