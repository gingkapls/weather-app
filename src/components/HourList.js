const HourList = (hourData) => {
  const fragment = new DocumentFragment();

  hourData.forEach((hour) => {
    const item = document.createElement('li');
    const timeEl = document.createElement('span');
    const tempEl = document.createElement('span');
    const img = new Image();
    const time = hour.time.split(' ')[1];

    timeEl.textContent = time;
    tempEl.textContent = `${hour.temp_c}°`;
    img.src = `https://${hour.condition.icon}`;

    item.append(timeEl);
    item.append(img);
    item.append(tempEl);

    fragment.append(item);
  });

  return fragment;
};

export default HourList;
