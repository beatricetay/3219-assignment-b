import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { weatherTypes } from '../commons/Weather';
import EditCardModal from "./EditCardModal";
import DeleteCardModal from "./DeleteCardModal";
import {reformatDateString} from "../commons/ReformatDate";

class WeatherIcon {
  constructor(iconName, color) {
    this.iconName = iconName;
    this.color = color;
  }
}

class DiaryEntryCard extends React.Component {

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
    const { card, fetchEntries } = this.props;
    const { _id, weather, message, location, create_date } = card;
    let time = new Date(create_date);
    let timeString = reformatDateString(time);
    const weatherIcon = this.getWeatherIcon(weather);
    const { iconName, color } = weatherIcon;
    return (
        <Card style={{textAlign: "center"}}>
          <Card.Content>
            <DeleteCardModal id={_id} fetchEntries={fetchEntries} />
            <EditCardModal card={card} fetchEntries={fetchEntries} />
          </Card.Content>
          <Card.Content>
            <Icon name={iconName} color={color} size='massive' />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              {timeString}
            </Card.Header>
            {message}
            <Card.Meta>
              at {location}
            </Card.Meta>
          </Card.Content>
        </Card>
    );
  }
}

export default DiaryEntryCard;
