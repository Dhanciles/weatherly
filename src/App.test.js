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

  it('should render CurrentWeather component', () => {
    wrapper.instance().takeNameAndLocation('Alex', '80013')
    wrapper.instance().render()

    expect(wrapper.find('CurrentWeather').length).toEqual(1) 
    localStorage.clear()   
  })

  it('should render SevenHour component', () => {
    wrapper.instance().takeNameAndLocation('Alex', '80013')
    wrapper.instance().render()

    expect(wrapper.find('SevenHour').length).toEqual(1)
    localStorage.clear()
  })

  it('should render the TenDay component', () => {
    wrapper.instance().takeNameAndLocation('Alex', '80013')
    wrapper.instance().render()

    expect(wrapper.find('TenDay').length).toEqual(1)
    localStorage.clear()
  })

  it('should render WelcomeUser component', () => {
    wrapper.instance().takeNameAndLocation('Alex', '80013')

    expect(wrapper.find('WelcomeUser').length).toEqual(1)
    localStorage.clear()
  })

  it('should have state and be able to update state', () => {
    const input = { userName: 'Derek', location: '80013' }

    expect(wrapper.state().userName).toEqual('')
    expect(wrapper.state().location).toEqual('')

    wrapper.instance().takeNameAndLocation(input.userName, input.location)

    expect(wrapper.state().userName).toEqual('Derek')
    expect(wrapper.state().location).toEqual('80013')
    localStorage.clear()
  })

  it('should add to local storage', () => {
    expect(localStorage.store).toEqual({})

    wrapper.instance().takeNameAndLocation('Alex', '80013')
   
    expect(localStorage.store.weatherly).toEqual('80013')
    expect(localStorage.store.userName).toEqual('Alex')
    localStorage.clear()
  })

  it('should pull from local storage', () => {
    expect(localStorage.store).toEqual({})

    localStorage.setItem('weatherly', '80013')
    localStorage.setItem('userName', 'Alex')

    wrapper.instance().getFromLocalStorage()


    expect(wrapper.instance().state.userName).toEqual('Alex')
    expect(wrapper.instance().state.location).toEqual('80013')
  })

  it('should be able to fetch from the API', () => {
    wrapper.instance()

  })

})


