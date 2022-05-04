import { identity } from "lodash";

import { readFileSync } from "fs";
jest.mock('fs');

test('Manual Mock', () => {
  expect(identity(300)).toEqual('bar');
  expect(readFileSync('./foo')).toEqual('bar')
});
