import React from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';
import { weatherOptions } from "../commons/Weather";
import {API_ROUTE} from "../commons/Route";

class EditCardModal extends React.Component {

  constructor(props) {
    super(props);

    const { card } = props;
    const { weather, message, location } = card;
    this.state = {
      message: message,
      weather: weather,
      location: location,
      isOpen: false
    };
  }

  onSubmit = () => {
    const { message, weather, location } = this.state;
    const { card } = this.props;
    const { _id } = card;

    const data = {
      message: message,
      weather: weather,
      location: location
    }

    // send to backend
    const { fetchEntries } = this.props;

    fetch(`${API_ROUTE}/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        fetchEntries();
      })
      .catch((err) => console.error(err));

    // close modal
    this.setState({ isOpen: false });
  }

  render() {
    const { weather, message, location, isOpen } = this.state;
    const triggerButton = (
      <Button icon style={{float: "right"}}>
        <Icon
          name='edit'
        />
      </Button>
    );
    return (
      <Modal
        closeIcon
        open={isOpen}
        onOpen={() => this.setState({ isOpen: true })}
        onClose={() => this.setState({ isOpen: false })}
        trigger={triggerButton}
      >
        <Modal.Header>Edit a diary entry</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select
                required
                label='Weather'
                options={weatherOptions}
                value={weather}
                onChange={(e,{ value}) => this.setState({ weather: value })}
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
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => this.setState({ isOpen: false })} >
            Cancel
          </Button>
          <Button onClick={this.onSubmit} >
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditCardModal;
