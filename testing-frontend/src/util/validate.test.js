import { it, expect, describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './numbers'

describe('validateStringNotEmpty()', () => {
  it('should throw an error, if an empty string is provided ', () => {
    const value = ''
    const validationFn = () => validateStringNotEmpty(value)
    expect(validationFn).toThrow()
  })

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1
    const inputBool = true
    const inputObj = {}

    const validationFnNum = () => validateStringNotEmpty(inputNum)
    const validationFnBool = () => validateStringNotEmpty(inputBool)
    const validationFnObj = () => validateStringNotEmpty(inputObj)

    expect(validationFnNum).toThrow()
    expect(validationFnBool).toThrow()
    expect(validationFnObj).toThrow()
  })
})
describe('validateNumber()', () => {
  it('should throw an error if NaN is provided', () => {
    const input = 'valid'
    const validationFn = () => validateNumber(input)
    expect(validationFn).toThrow()
  })

  it('should throw an error if a non-numeric value is provided', () => {
    const input = '1'
    const validationFn = () => validateNumber(input)
    expect(validationFn).toThrow()
  })

})
