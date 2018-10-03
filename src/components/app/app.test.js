import React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('A example test suite', function() {
  it('should return true', function () {
    expect(shallow(<App />).find('.wrapper').contains('Hello World')).toBe(true);
  });
});
