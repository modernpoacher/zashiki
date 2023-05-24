import {
  handleException
} from '#common/exception'

export default {
  assign: 'response',
  method: function response ({ payload = {} }) {
    try {
      return payload
    } catch (e) {
      handleException(e)
    }
  }
}
