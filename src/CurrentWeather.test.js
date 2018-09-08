import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import { data } from './mockdata.js'


describe('CurrentWeather', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentWeather weatherData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})