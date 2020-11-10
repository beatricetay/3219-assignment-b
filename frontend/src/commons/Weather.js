export const weatherTypes = {
  SUNNY: 'sunny',
  RAINY: 'rainy',
  CLOUDY: 'cloudy'
};


export const weatherOptions = Object
  .values(weatherTypes)
  .map((weather) => {
    return {
      key: weather,
      text: weather,
      value: weather
    };
  });
