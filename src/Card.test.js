import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import { data } from './mockdata.js'


describe('Card', () => {

  it('renders without crashing', () => {
    let cardData = data.forecast.simpleforecast.forecastday
     
    cardData.map((cardInfo) => {
      
      const div = document.createElement('div');
      ReactDOM.render(<Card tenDayInfo={cardInfo} />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })
  it('should be receiving props', () => {
    let cardData = data.forecast.simpleforecast.forecastday
     
    cardData.map((cardInfo) => {
      
      const div = document.createElement('div');
      ReactDOM.render(<Card tenDayInfo={cardInfo} />, div);
      let card = <Card tenDayInfo={cardInfo} />
      ReactDOM.unmountComponentAtNode(div);
      
      expect(card.props).toBeDefined()
    })
  })
})