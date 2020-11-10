import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import { weatherOptions } from "../commons/Weather";

class EditCardModal extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      message: '',
      weather: '',
      location: '',
      errorMessage: ''
    };
  }

  handleCancel = () => {
    const { cancelCallback } = this.props;
    cancelCallback();
  }

  onSubmit = () => {
    const { submitCallback } = this.props;
    const data = {

    }
  }

  render() {
    const { message, location } = this.state;
    return (
      <Modal
        closeIcon
        open={true}
        onClose={this.handleCancel}
        closeOnEscape={false}
        closeOnDimmerClick={false}
      >
        <Modal.Header>Edit a diary entry</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select
                required
                label='Weather'
                options={weatherOptions}
                onChange={(e,{ value}) => this.setState({ weather: value })}
                placeholder='select weather'
              />
              <Form.Input
                id='message'
                label='Message'
                placeholder='enter message'
                onChange={this.handleTextInputChange}
                value={message}
              />
              <Form.Input
                id='location'
                label='Location'
                placeholder='enter location'
                onChange={this.handleTextInputChange}
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
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.handleCancel} >
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