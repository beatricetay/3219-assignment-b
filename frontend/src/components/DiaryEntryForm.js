import React from 'react';
import { Segment, Form, Button } from "semantic-ui-react";
import { weatherOptions } from "../commons/Weather";

class DiaryEntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      weather: '',
      location: '',
      errorMessage: ''
    }
  }

  handleTextInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { message, weather, location } = this.state;
    if (!message) {
      this.setState({ errorMessage: 'A diary entry must contain the weather'});

    } else {
      // send to backend
      const data = {
        message: message,
        weather: weather,
        location: location
      }
      console.log(data);

      // reset state
      this.setState({weather: '', message: '', location: ''});
    }
  }

  render() {
    const { message, location } = this.state;
    return (
      <Segment>
        <h1>Create an entry</h1>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select
              required
              label='Weather'
              options={weatherOptions}
              onChange={(e,{ value }) => this.setState({ weather: value })}
              placeholder='select weather'
            />
            <Form.Input
              id='message'
              label='Message'
              placeholder='enter message'
              onChange={(e, { value }) => this.setState({ message: value })}
              value={message}
            />
            <Form.Input
              id='location'
              label='Location'
              placeholder='enter location'
              onChange={(e, { value }) => this.setState({ location: value })}
              value={location}
            />
          </Form.Group>

          <Button
            type="submit"
            onClick={this.handleSubmit}
          >
            Create entry
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default DiaryEntryForm;
