import debug from 'debug'

import {
  expect
} from 'chai'

import create from '@modernpoacher/zashiki/common/pre/rid/create'

describe('@modernpoacher/zashiki/common/pre/rid/create', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

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
