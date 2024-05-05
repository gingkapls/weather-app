import HourList from './HourList';
import Weathercard from './WeatherCard';
import ForecastItem from './ForecastItem';

const DOMController = (() => {
  // Current weather card
  const currentWeatherCard = document.querySelector('.current-weather-card');
  const locationEl = document.querySelector('.location');
  const hourList = document.querySelector('.hour-list');
  const forecastList = document.querySelector('.forecast-list');

  const generateHourlyList = (hourData) => {
    const list = HourList(hourData);
    hourList.replaceChildren(list);
  };

  const generateWeatherCard = (data) => {
    currentWeatherCard.replaceChildren(Weathercard(data));
  };

  const generateForecast = (data) => {
    const today = ForecastItem(data.todayData);
    const tomorrow = ForecastItem(data.tomorrowData);
    const overmorrow = ForecastItem(data.overmorrowData);

    forecastList.replaceChildren(today, tomorrow, overmorrow);
  };

  const render = (data) => {
    locationEl.value = data.area.name;
    generateWeatherCard(data);
    generateHourlyList(data.todayData.hours);
    generateForecast(data);
  };

  return {
    get location() {
      return locationEl;
    },
    render,
  };
})();

export default DOMController;
