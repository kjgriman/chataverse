import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chataverse } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chataverse />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
