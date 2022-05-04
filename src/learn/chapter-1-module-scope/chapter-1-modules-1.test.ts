// npm test -- --watchAll=false --testNamePattern="chapter-1-modules"
import {counter} from "./counter";

describe('chapter-1-module-scope 1', () => {

  test('Test 1', () => {
    counter.x += 1;
    console.log("counter.x "  + counter.x);
  });

  test('Test 2', () => {
    counter.x += 1;
    console.log("counter.x "  + counter.x);
  });

});
