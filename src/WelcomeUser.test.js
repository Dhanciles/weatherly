import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import WelcomeUser from './WelcomeUser';

describe('WelcomeUser', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WelcomeUser />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})