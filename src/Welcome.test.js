import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome';
import App from './App';

describe('Welcome', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should have state and be able to update state', () => {
    const input = { userName: 'Derek', location: '80013' }

    expect(wrapper.state().userName).toEqual('')
    expect(wrapper.state().location).toEqual('')

    wrapper.setState({userName: input.userName, location: input.location })

    expect(wrapper.state().userName).toEqual('Derek')
    expect(wrapper.state().location).toEqual('80013')
  })


})