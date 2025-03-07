import Boom from '@hapi/boom'

import zashiki from '#zashiki/config'

import {
  createZID
} from '@modernpoacher/zashiki-transport'

import {
  BAD_IMPLEMENTATION
} from '#zashiki/common/exception'

const ZID = zashiki.get('zashiki:zid')
const BEARERTOKEN = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
const getBearerToken = (value = '') => (value.match(BEARERTOKEN) || []).shift()

export default {
  assign: 'zid',
  async method ({ state = {}, headers: { authorization } }, h) {
    let {
      zid = getBearerToken(authorization)
    } = state

    try {
      h.state('zid', zid || (zid = await createZID()), ZID)

      return zid
    } catch (e) {
      throw Boom.badImplementation(BAD_IMPLEMENTATION, e)
    }
  }
}
