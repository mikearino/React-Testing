import { add, total } from './App'

// Unit test
// Only tests one thing
// const value = add(1,2)
test('add',() => {
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
})

test('total', () => {
  expect(total(5,20)).toBe('$25')
})