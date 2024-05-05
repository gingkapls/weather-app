import HourList from './HourList';

const DOMController = (() => {
  // Current weather card
  const currentWeatherCard = document.querySelector('.current-weather');
  const currentTempEl = currentWeatherCard.querySelector('.current-temp');
  const locationEl = currentWeatherCard.querySelector('.location');
  const statusEl = currentWeatherCard.querySelector('.status');
  const minTempEl = currentWeatherCard.querySelector('.min-temp');
  const maxTempEl = currentWeatherCard.querySelector('.max-temp');

  // const adviceContainer = document.querySelector('.advice');
  const hourList = document.querySelector('.hour-list');

  const generateHourlyList = (hourData) => {
    const list = HourList(hourData);
    hourList.replaceChildren(list);
  };

  const updateElement = (element) => (val) => {
    // eslint-disable-next-line no-param-reassign
    element.textContent = val;
  };

  const getLocation = () => locationEl.value;
  const setLocation = (val) => {
    locationEl.value = val;
  };
  const setStatus = updateElement(statusEl);
  const setCurrentTemp = updateElement(currentTempEl);
  const setMinTemp = updateElement(minTempEl);
  const setMaxTemp = updateElement(maxTempEl);

  const setCurrentDay = ({ location, status, temp, minTemp, maxTemp }) => {
    setLocation(location);
    setStatus(status);
    setMinTemp(`L:${minTemp}°`);
    setMaxTemp(`H:${maxTemp}°`);
    setCurrentTemp(`${temp}°`);
  };

  const setDayForecast = (day) => (element) => {};

  return {
    getLocation,
    generateHourlyList,
    setLocation,
    setCurrentDay,
  };
})();

export default DOMController;
