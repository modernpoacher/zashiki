import debug from 'debug'

import {
  expect
} from 'chai'

import omega from '@modernpoacher/zashiki/common/pre/definition/omega'

describe('@modernpoacher/zashiki/common/pre/definition/omega', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`omega`', () => {
    it('is an object', () => {
      expect(omega)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(omega)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(omega)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'definition\'', () => {
        expect(omega.assign)
          .to.equal('definition')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(omega.method)
          .to.be.a('function')
      })
    })
  })
})
