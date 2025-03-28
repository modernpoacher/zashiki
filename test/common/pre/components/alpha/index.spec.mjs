import {
  expect
} from 'chai'

import alpha from '#zashiki/common/pre/components/alpha'

describe('#zashiki/common/pre/components/alpha', () => {
  describe('`alpha`', () => {
    it('is an object', () => {
      expect(alpha)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(alpha)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(alpha)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'components\'', () => {
        expect(alpha.assign)
          .to.equal('components')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(alpha.method)
          .to.be.a('function')
      })
    })
  })
})
