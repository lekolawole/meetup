import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('user is on the main page', () => {
          AppWrapper = mount(<App />);
        });

        when('an event is displayed', () => {
          AppWrapper.update();
        });

        then('the event details are collapsed', () => {
          expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('events list (suggestions) are displayed', async () => {
          AppWrapper = await mount(<App />);
        });

        when('the user clicks an event', () => {
          AppWrapper.update();
          AppWrapper.find('.details-button').at(0).simulate('click');
        });

        then('the event details will be displayed', () => {
          expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('the event details are displayed', async () => {
          AppWrapper = await mount(<App />);
          AppWrapper.update();
          AppWrapper.find('.details-button').at(0).simulate('click');
          expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });

        when('the user clicks Details button', () => {
          AppWrapper.find('.details-button').at(0).simulate('click');
        });

        then('event details willbe hidden', () => {
          expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});