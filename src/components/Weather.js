import { API_KEY, NUM_DAYS } from '../config';

const Weather = async ({ location }) => {
  const request = await (async () =>
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.toLowerCase()}&days=${NUM_DAYS}&aqi=yes&alerts=yes`,
    ))();

  const data = await request.json();

  const area = {
    name: data.location.name,
    country: data.location.country,
    region: data.location.region,
  };

  const getDayData = (dayCount) => {
    const dayData = data.forecast.forecastday[dayCount];
    const {
      mintemp_c: minTemp,
      maxtemp_c: maxTemp,
      avgtemp_c: avgTemp,
    } = dayData.day;

    const { hour: hours, date_epoch: timestamp } = dayData;
    const { icon } = dayData.day.condition;

    return {
      timestamp,
      minTemp,
      maxTemp,
      avgTemp,
      hours,
      icon: `https://${icon}`,
    };
  };

  const todayData = getDayData(0);
  const tomorrowData = getDayData(1);
  const overmorrowData = getDayData(2);
  const currentData = (() => {
    const { feelslike_c: feelsLike, temp_c: temp, humidity } = data.current;

    return {
      feelsLike,
      temp,
      humidity,
    };
  })();

  return {
    get data() {
      return data;
    },
    get area() {
      return area;
    },
    currentData,
    todayData,
    tomorrowData,
    overmorrowData,
  };
};

export default Weather;
