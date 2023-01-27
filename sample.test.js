import { arrayLength } from './sample.js';

describe('Testing of function arrayLength', () => {
  test('[0,0] It should be 2', () => {
    const r = arrayLength([0, 0]);
    expect(r).toBe(2);
  });
});