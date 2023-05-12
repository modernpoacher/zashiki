import {
  handleException
} from 'zashiki/common/exception'

import transformFromHashToDocument from 'shinkansen-transmission/transmission/from-hash-to-document'

export default {
  assign: 'response',
  method: function response ({ payload = {}, pre: { definition = [] } }) {
    try {
      return definition.map((definition) => transformFromHashToDocument(payload, definition))
    } catch (e) {
      handleException(e)
    }
  }
}
