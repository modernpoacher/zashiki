import {
  expect
} from 'chai'

import embark from '#zashiki/common/pre/definition/embark'

describe('#zashiki/common/pre/definition/embark', () => {
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
      it('is the string \'definition\'', () => {
        expect(embark.assign)
          .to.equal('definition')
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
