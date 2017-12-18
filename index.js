import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Mohamed1', () => App);
import RNCalendarEvents from 'react-native-calendar-events';
RNCalendarEvents.saveEvent('title', {
    location: 'location',
    notes: 'notes',
    startDate: '2018-08-19T19:26:00.000Z',
    endDate: '2018-09-19T19:26:00.000Z'
  })
  .then(id => {
    // handle success
    alert(id);
  })
  .catch(error => {
    // handle error
  });
