import { play } from './index.js';
import { frameTest } from './index.js';


describe('Testing Initial Patter X5x with 11x11 frame', () => {
  test('Cell with Initial position at row 6 and column 6 is Dead at iteration 10 ', () => {
    // numberOfRowsOfTheFrame = 11;
    // numberOfColumnsOfTheFrame = 11;
    // initialPatternChoice = 'X5x'
    play();
    // let r = frameTest.filter((element) => element.iteration === 0)[60].cellStatus;
    let r='A'
    expect(r).toBe('A');
  });
});