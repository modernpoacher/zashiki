import {
  expect
} from 'chai'

import alpha from '#zashiki/common/pre/description/alpha'

describe('#zashiki/common/pre/description/alpha', () => {
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
      it('is the string \'description\'', () => {
        expect(alpha.assign)
          .to.equal('description')
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
