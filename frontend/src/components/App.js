import React from 'react';
import { Segment } from "semantic-ui-react";
import DiaryEntriesGrid from "./DiaryEntriesGrid";
import DiaryEntryForm from "./DiaryEntryForm";
import {API_ROUTE} from "../commons/Route";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentDidMount() {
    this.fetchEntries();
  }

  fetchEntries = () => {
    fetch(API_ROUTE, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        const { status, data } = res;
        if (status) {
          this.setState({ entries: data.reverse() });
        }
      })
      .catch((err) => console.error(err));
  }


  render() {
    const { entries } = this.state
    return (
      <Segment>
        <DiaryEntryForm fetchEntries={this.fetchEntries} />
        <DiaryEntriesGrid entries={entries} fetchEntries={this.fetchEntries} />
      </Segment>
    );
  }
}

export default App;
