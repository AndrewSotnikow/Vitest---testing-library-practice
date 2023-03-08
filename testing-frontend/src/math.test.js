import { it, expect } from 'vitest'
import { add } from './math.js'

it('should summarize all number values in an array', () => {
  const numbers = [1, 2, 3]
  const res = add(numbers)
  expect(res).toBe(6)
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const inputs = ['invalid', 1]
  const res = add(inputs)
  expect(res).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2']
  const expectedRes = numbers.reduce((acc, next) => +acc + +next, 0)

  const res = add(numbers)
  expect(res).toBe(expectedRes)
})

it('should yield a 0 if an empty array is provided', () => {
  const numbers = []
  const res = add(numbers)
  expect(res).toBe(0)
})

it('should throw an error if no value is passed into the func', () => {
  const resultFn = () => {
    add()
  }
  expect(resultFn).toThrow()
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1
  const num2 = 2

  const resultFn = () => {
    add(num1, num2)
  }

  expect(resultFn).toThrow(/is not iterable/)
})
