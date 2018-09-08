import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render Welcome component', () => { 
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should have state and be able to update state', () => {
    const input = { userName: 'Derek', location: '80013' }

    expect(wrapper.state()).toEqual({userName: '', location: ''})

    wrapper.instance().takeNameAndLocation(input.userName, input.location)

    expect(wrapper.state().userName).toEqual('Derek')
    expect(wrapper.state().location).toEqual('80013')
  })

  it('should render WelcomeUser component when it has state', () => {
    wrapper.instance().takeNameAndLocation('Alex', '80013')

    expect(wrapper.find('WelcomeUser').length).toEqual(1)
  })


})


