import debug from 'debug'

import { expect } from 'chai'

import embark from 'zashiki/common/pre/response/embark'

describe('zashiki/common/pre/response/embark', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`embark`', () => {
    it('is an object', () => {
      expect(embark)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(embark)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(embark)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'response\'', () => {
        expect(embark.assign)
          .to.equal('response')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(embark.method)
          .to.be.a('function')
      })
    })
  })
})
