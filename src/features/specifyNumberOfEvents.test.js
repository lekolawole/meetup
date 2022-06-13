import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('When user hasn\'t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('user hasn’t specified a number', async () => {
          AppWrapper = await mount(<App />);
        });

        when('the user opens the app', () => {
          AppWrapper.update();
        });

        then('the user should see the list of 32 upcoming events', () => {
          expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the main page is open', async () => {
          AppWrapper = await mount(<App />);
        });

        when('the user changes the number', () => {
          const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
          NumberOfEventsWrapper.find('.number-of-events').hostNodes().simulate('change', { target: { value: 2 } });
        });

        then('the user should receive a list of events that match what they’ve input', () => {
          const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
           NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: { value: 2 } });
           expect(AppWrapper.state('events')).toHaveLength(2);
        });
    });
});