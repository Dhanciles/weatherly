import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import { data } from './mockdata.js'


describe('CurrentWeather', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentWeather weatherData={data}
                                    tempData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be able to take props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrentWeather weatherData={data}
                                    tempData={data} />, div);
    let currWeather = <CurrentWeather weatherData={data}
                                    tempData={data} />
    ReactDOM.unmountComponentAtNode(div);
 
    expect(currWeather.props).toBeDefined()
  });
})