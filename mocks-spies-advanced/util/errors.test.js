import { describe, it, expect } from 'vitest'
import { HttpError, ValidationError } from './errors'

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testStatus = 503
    const message = 'text'
    const data = { key: 'test' }
    const apiError = new HttpError(testStatus, message, data)
    expect(apiError.statusCode).toBe(testStatus)
    expect(apiError.message).toBe(message)
    expect(apiError.data).toBe(data)
  })

  it('should contain undefined as data if no data provided', () => {
    const testStatus = 503
    const message = 'text'
    const apiError = new HttpError(testStatus, message)
    expect(apiError.statusCode).toBe(testStatus)
    expect(apiError.message).toBe(message)
    expect(apiError.data).toBeUndefined()
  })
})

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const message = 'text'

    const validationError = new ValidationError(message)

    expect(validationError.message).toBe(message)
  })
})
