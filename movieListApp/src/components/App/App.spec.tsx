import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

let component = shallow(<App />);

describe('<App />', () => {
  describe('render', () => {
    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
