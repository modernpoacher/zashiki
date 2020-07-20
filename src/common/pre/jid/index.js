import Boom from '@hapi/boom'

import zashiki from 'zashiki/config'

import {
  createZID
} from '@modernpoacher/zashiki-transport'

import {
  BAD_IMPLEMENTATION
} from 'zashiki/common/exception'

const ZID = zashiki.get('zashiki:jid')
const BEARERTOKEN = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
const getBearerToken = (value = '') => (value.match(BEARERTOKEN) || []).shift()

export default {
  assign: 'jid',
  async method ({ state = {}, headers: { authorization } }, h) {
    let {
      jid = getBearerToken(authorization)
    } = state

    try {
      h.state('jid', jid || (jid = await createZID()), ZID)

      return jid
    } catch (e) {
      throw Boom.badImplementation(BAD_IMPLEMENTATION, e)
    }
  }
}
