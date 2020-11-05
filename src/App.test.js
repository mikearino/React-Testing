import { add } from './App'

// Unit test
// Only tests one thing
test('add',() => {
  // const value = add(1,2)
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
})
