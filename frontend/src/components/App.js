import React from 'react';
import { Segment } from "semantic-ui-react";
import DiaryEntriesGrid from "./DiaryEntriesGrid";
import DiaryEntryForm from "./DiaryEntryForm";

class App extends React.Component {

  render() {
    return (
      <Segment>
        <DiaryEntryForm />
        <DiaryEntriesGrid />
      </Segment>
    );
  }
}

export default App;
