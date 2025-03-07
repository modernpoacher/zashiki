import {
  expect
} from 'chai'

import {
  get,
  post,
  pre,
  state,
  alpha,
  omega,
  embark,
  debark,
  confirm
} from '#zashiki/stages'

describe('#zashiki/stages', () => {
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

  describe('`alpha`', () => {
    it('is an module', () => {
      expect(alpha)
        .to.be.an('module')
    })
  })

  describe('`omega`', () => {
    it('is an module', () => {
      expect(omega)
        .to.be.an('module')
    })
  })

  describe('`embark`', () => {
    it('is an module', () => {
      expect(embark)
        .to.be.an('module')
    })
  })

  describe('`debark`', () => {
    it('is an module', () => {
      expect(debark)
        .to.be.an('module')
    })
  })

  describe('`confirm`', () => {
    it('is an module', () => {
      expect(confirm)
        .to.be.an('module')
    })
  })
})
