import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { weatherTypes } from '../commons/Weather';
import EditCardModal from "./EditCardModal";

class WeatherIcon {
  constructor(iconName, color) {
    this.iconName = iconName;
    this.color = color;
  }
}

class DiaryEntryCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isEditModalOpen: false };
  }

  modalCancelCallback = () => {
    this.setState({ isEditModalOpen: false });
  }

  modalSubmitCallback = (data) => {
    // this.setState({ isEditModalOpen: true });
    console.log(data);
  }

  getWeatherIcon = (weather) => {
    if (weather === weatherTypes.SUNNY) {
      return new WeatherIcon('sun', 'orange')
    }
    if (weather === weatherTypes.CLOUDY) {
      return new WeatherIcon('cloud', 'grey');
    }
    if (weather === weatherTypes.RAINY) {
      return new WeatherIcon('tint', 'blue');
    }
  }

  render() {
    const { isEditModalOpen } = this.state;
    const { card } = this.props;
    const { weather, message, location, time } = card;
    const weatherIcon = this.getWeatherIcon(weather);
    const { iconName, color } = weatherIcon;
    return (

      <React.Fragment>
        { isEditModalOpen
          ? <EditCardModal
              cancelCallback={this.modalCancelCallback}
              submitCallback={this.modalSubmitCallback}
              hello='hi'
            />
          : null
        }
        <Card style={{textAlign: "center"}}>
          <Card.Content>
            <Button icon color='red' style={{float: "right"}}>
              <Icon
                name='times'
              />
            </Button>
            <Button
              icon='edit'
              style={{float: "right"}}
              onClick={() => this.setState({ isEditModalOpen: true })}
            />

          </Card.Content>
          <Card.Content>
            <Icon name={iconName} color={color} size='massive' />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              {time.toDateString()}
            </Card.Header>
            {message}
            <Card.Meta>
              at {location}
            </Card.Meta>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default DiaryEntryCard;
