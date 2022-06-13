import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render NumberOfEvents', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('change state of numberOfEvents when input changes', () => {
    NumberOfEventsWrapper.find('.number-of-events').hostNodes().simulate('change', {
      target: { value: 2 } });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(2);
  });
})