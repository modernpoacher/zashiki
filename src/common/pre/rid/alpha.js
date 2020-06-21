import zashiki from 'zashiki/config'

import getRID from 'zashiki/common/rid/alpha/get-rid'

const RID = zashiki.get('zashiki:rid')

/*
 *  `Promise`
 */
export default {
  assign: 'rid',
  async method (request, h) {
    const rid = await getRID(request)

    h.state('rid', rid, RID)

    return rid
  }
}
