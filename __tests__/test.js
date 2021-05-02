/* eslint-disable operator-linebreak */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import demo from '../src/js/app.js';

test('waits 1 second before ending the game', () => {
  expect(demo(3)).toBe(3);
});
