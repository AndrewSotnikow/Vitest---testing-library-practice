import { vi } from 'vitest'

export default promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }),
}
