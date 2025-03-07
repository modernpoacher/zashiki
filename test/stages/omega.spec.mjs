import {
  expect
} from 'chai'

import {
  get,
  post,
  pre,
  state,
  validate
} from '#zashiki/stages/omega'

describe('#zashiki/stages/omega', () => {
  describe('`get`', () => {
    it('is a function', () => {
      expect(get)
        .to.be.a('function')
    })
  })

  describe('`post`', () => {
    it('is a function', () => {
      expect(post)
        .to.be.a('function')
    })
  })

  describe('`pre`', () => {
    it('is an array', () => {
      expect(pre)
        .to.be.an('array')
    })
  })

  describe('`state`', () => {
    it('is an object', () => {
      expect(state)
        .to.be.an('object')
    })
  })

  describe('`validate`', () => {
    it('is an object', () => {
      expect(validate)
        .to.be.an('object')
    })
  })
})
