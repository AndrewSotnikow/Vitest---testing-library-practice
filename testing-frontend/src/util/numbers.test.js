import { describe, it, expect } from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers'

describe('transformToNumber()', () => {
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
})

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string values is provided', () => {
    const numberValues = ['1', '2']
    const cleanedNumbers = cleanNumbers(numberValues)
    expect(cleanedNumbers[0]).toBeTypeOf('number')
  })

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1]
    const cleanFn = () => cleanNumbers(numberValues)
    expect(cleanFn).toThrow()
  })
})

