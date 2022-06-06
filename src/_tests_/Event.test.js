import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event start time', () => {
    expect(EventWrapper.find('.startDate')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  
  test('render event details collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render show details button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('show collapsed state when button is clicked', () => {
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hide details when button is clicked', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

})