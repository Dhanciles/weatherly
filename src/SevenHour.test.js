import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';
import { data } from './mockdata.js'


describe('SevenHour', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SevenHour sevenHourData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})