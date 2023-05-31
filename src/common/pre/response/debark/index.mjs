import {
  handleException
} from '#common/exception'

export default {
  assign: 'response',
  method ({ payload = {} }) {
    try {
      return payload
    } catch (e) {
      handleException(e)
    }
  }
}
