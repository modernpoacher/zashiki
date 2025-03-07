import {
  expect
} from 'chai'

import create from '#zashiki/common/pre/rid/create'

describe('#zashiki/common/pre/rid/create', () => {
  describe('`create`', () => {
    it('is an object', () => {
      expect(create)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(create)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(create)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'rid\'', () => {
        expect(create.assign)
          .to.equal('rid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(create.method)
          .to.be.a('function')
      })
    })
  })
})
