import './style.css';
import DOMController from './components/DOMController';
import Observable from './components/Observable';
import Weather from './components/Weather';

const controller = DOMController;
const location = Observable();

// Listening for location changes
controller.location.addEventListener('change', async (event) => {
  window.console.log('changed');
  await location.update(await Weather({ location: event.currentTarget.value }));
});

// Rendering on location change
location.subscribe(() => controller.render(location.value));

// Initial location
await location.update(await Weather({ location: 'Cupertino' }));
