const DOMController = (() => {
  const currentWeatherCard = document.querySelector('.current-weather');
  const currentTempEl = currentWeatherCard.querySelector('.current-temp');
  const locationEl = currentWeatherCard.querySelector('.location');
  const statusEl = currentWeatherCard.querySelector('.status');
  const minTempEl = currentWeatherCard.querySelector('.min-temp');
  const maxTempEl = currentWeatherCard.querySelector('.max-temp');

  const updateElement = (element) => (val) => {
    // eslint-disable-next-line no-param-reassign
    element.textContent = val;
  };

  const getLocation = () => locationEl.textContent;
  const setLocation = updateElement(locationEl);
  const setStatus = updateElement(statusEl);
  const setCurrentTemp = updateElement(currentTempEl);
  const setMinTemp = updateElement(minTempEl);
  const setMaxTemp = updateElement(maxTempEl);

  const setCurrentDay = ({ location, status, temp, minTemp, maxTemp }) => {
    setLocation(location);
    setStatus(status);
    setMinTemp(minTemp);
    setMaxTemp(maxTemp);
    setCurrentTemp(temp);
  };

  return {
    getLocation,
    setLocation,
    setCurrentDay,
  };
})();

export default DOMController;
