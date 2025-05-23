import {
  expect
} from 'chai'

import embark from '#zashiki/common/pre/components/embark'

describe('#zashiki/common/pre/components/embark', () => {
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
      it('is the string \'components\'', () => {
        expect(embark.assign)
          .to.equal('components')
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
