import { beforeEach, it, expect, vi } from 'vitest'
import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'
import { showError } from './dom'

const htmlDomPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDomPath).toString()

const window = new Window()
const document = window.document
vi.stubGlobal('document', document)

beforeEach(() => {
  document.body.innerHTML = ''
  document.write(htmlDocumentContent)
})

it('should add an error  to the id="errors" element', () => {
  showError('test')

  const errorsEl = document.getElementById('errors')
  const errorParagraph = errorsEl.firstElementChild

  expect(errorParagraph).not.toBeNull()
})

it('should not contain n error paragraph initially', () => {
  const errorsEl = document.getElementById('errors')
  const errorParagraph = errorsEl.firstElementChild

  expect(errorParagraph).toBeNull()
})

it('should output the provided message in the error paragraph', () => {
  const tetsErrorMessage = 'test'

  showError(tetsErrorMessage)

  const errorsEl = document.getElementById('errors')
  const errorParagraph = errorsEl.firstElementChild

  showError(tetsErrorMessage)

  expect(errorParagraph.textContent).toBe(tetsErrorMessage)
})
