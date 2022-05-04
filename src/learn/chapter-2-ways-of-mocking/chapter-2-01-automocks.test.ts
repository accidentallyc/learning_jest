import {exportedClass, exportedComponent, exportedFunction, exportedObject, exportedValue} from "./randomModule";

jest.mock('./randomModule');

test('Auto Mock', () => {
  console.log("exportedFunction      ===>      ", exportedFunction);
  console.log("exportedObject      ===>      ", exportedObject);
  console.log("exportedClass      ===>      ", exportedClass);
  console.log("exportedComponent      ===>      ", exportedComponent);
  console.log("exportedValue      ===>      ", exportedValue);
  expect(1).toBeTruthy();
});
