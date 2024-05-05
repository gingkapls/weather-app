import { format } from 'date-fns/format';

const ForecastItem = (dayData) => {
  const item = document.createElement('li');
  const day = format(dayData.timestamp * 1000, 'EEE');
  const range = document.createElement('div');
  range.classList.add('meter');

  const img = new Image();
  img.src = dayData.icon;

  const { minTemp, maxTemp } = dayData;

  const dayDiv = document.createElement('div');
  dayDiv.textContent = day;

  const minTempEl = document.createElement('div');
  const maxTempEl = document.createElement('div');
  minTempEl.textContent = `${Math.round(minTemp)}°`;
  maxTempEl.textContent = `${Math.round(maxTemp)}°`;

  item.appendChild(dayDiv);
  item.appendChild(img);
  item.appendChild(minTempEl);
  item.appendChild(range);
  item.appendChild(maxTempEl);

  return item;
};

export default ForecastItem;
