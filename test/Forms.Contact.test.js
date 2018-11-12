const helloTest = require('./hello')

test('Jest should run', () => {
  expect(helloTest()).toBe('hello')
})
