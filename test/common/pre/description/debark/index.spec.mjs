import debug from 'debug'

import { expect } from 'chai'

import debark from '@modernpoacher/zashiki/common/pre/description/debark'

describe('@modernpoacher/zashiki/common/pre/description/debark', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`debark`', () => {
    it('is an object', () => {
      expect(debark)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(debark)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(debark)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'description\'', () => {
        expect(debark.assign)
          .to.equal('description')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(debark.method)
          .to.be.a('function')
      })
    })
  })
})
