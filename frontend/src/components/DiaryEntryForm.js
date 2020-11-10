import React from 'react';
import { Segment, Form, Button, Message } from "semantic-ui-react";
import { weatherOptions } from "../commons/Weather";
import { API_ROUTE } from "../commons/Route";

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

  handleSubmit = (e) => {
    e.preventDefault();

    const { message, weather, location } = this.state;
    if (!weather) {
      this.setState({ errorMessage: 'You must select a weather'});

    } else {
      const data = {
        message: message,
        weather: weather,
        location: location
      }

      // send to backend
      const { fetchEntries } = this.props;

      fetch(API_ROUTE, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          fetchEntries();
        })
        .catch((err) => console.error(err));

      // reset state
      this.setState({weather: '', message: '', location: '', errorMessage: ''});
    }
  }

  render() {
    const { weather, message, location, errorMessage } = this.state;
    return (
      <Segment>
        { errorMessage
          ? <Message error header={errorMessage} />
          : null
        }
        <h1>Create an entry</h1>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select
              required
              label='Weather'
              options={weatherOptions}
              onChange={(e,{ value }) => this.setState({ weather: value })}
              placeholder='select weather'
              value={weather}
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
