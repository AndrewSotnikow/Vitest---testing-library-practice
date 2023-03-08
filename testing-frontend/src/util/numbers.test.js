import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string number to a number of type number', () => {
  const number = '3'
  const res = transformToNumber(number)
  expect(res).toBeTypeOf('number')
})

it('should return a NaN for non-transformable values', () => {
  const number = 'number'
  const res = transformToNumber(number)
  expect(res).toBeNaN()
})
