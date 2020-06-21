import {
  handleException
} from 'zashiki/common/exception'

import transformFromHashToDocument from 'shinkansen-transmission/lib/transmission/from-hash-to-document'

export default {
  assign: 'response',
  method: function response ({ payload = {}, pre: { definition = {} } }) {
    try {
      /*
       *  Hapi throws if the `response` function returns `undefined`,
       *  or returns a Promise which resolves to `undefined`
       */
      const document = transformFromHashToDocument(payload, definition)
      /*
       *  An object literal serves the same purpose
       */
      return (document === undefined) ? {} : document
    } catch (e) {
      handleException(e)
    }
  }
}
