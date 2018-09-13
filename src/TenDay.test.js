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

  it('should be able to take props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TenDay tenDayData={data} />, div);
    let tenDay = <TenDay tenDayData={data} />
    ReactDOM.unmountComponentAtNode(div);

    expect(tenDay.props).toBeDefined()
  });

})