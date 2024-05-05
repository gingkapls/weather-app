const WeatherCard = (data) => {
  const fragment = new DocumentFragment();
  const currentTempEl = document.createElement('div');
  currentTempEl.classList.add('current-temp');

  const statusEl = document.createElement('div');
  statusEl.classList.add('status');

  const tempRange = document.createElement('div');
  tempRange.classList.add('temp-range');

  const minTempEl = document.createElement('div');
  minTempEl.classList.add('min-temp');
  const maxTempEl = document.createElement('div');
  maxTempEl.classList.add('max-temp');

  currentTempEl.textContent = `${Math.round(data.currentData.temp)}°`;
  statusEl.textContent = data.todayData.status;
  minTempEl.textContent = `L:${Math.round(data.todayData.minTemp)}°`;
  maxTempEl.textContent = `H:${Math.round(data.todayData.maxTemp)}°`;

  tempRange.appendChild(minTempEl);
  tempRange.appendChild(maxTempEl);

  fragment.appendChild(currentTempEl);
  fragment.appendChild(statusEl);
  fragment.appendChild(tempRange);

  return fragment;
};

export default WeatherCard;
