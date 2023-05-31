import {
  handleException
} from '#common/exception'

import transformFromHashToDocument from 'shinkansen-transmission/transmission/from-hash-to-document'

export default {
  assign: 'response',
  method ({ payload = {}, pre: { definition = [] } }) {
    try {
      return definition.map((definition) => transformFromHashToDocument(payload, definition))
    } catch (e) {
      handleException(e)
    }
  }
}
