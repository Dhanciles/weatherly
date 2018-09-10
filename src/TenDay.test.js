import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';
import { data } from './mockdata.js'


describe('TenDay', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TenDay tenDayData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})