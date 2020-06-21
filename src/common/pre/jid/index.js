import Boom from '@hapi/boom'

import zashiki from 'zashiki/config'

import {
  createJID
} from '@modernpoacher/zashiki-transport'

import {
  BAD_IMPLEMENTATION
} from 'zashiki/common/exception'

const JID = zashiki.get('zashiki:jid')
const BEARERTOKEN = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
const getBearerToken = (value = '') => (value.match(BEARERTOKEN) || []).shift()

export default {
  assign: 'jid',
  async method ({ state = {}, headers: { authorization } }, h) {
    let {
      jid = getBearerToken(authorization)
    } = state

    try {
      h.state('jid', jid || (jid = await createJID()), JID)

      return jid
    } catch (e) {
      throw Boom.badImplementation(BAD_IMPLEMENTATION, e)
    }
  }
}
