import zashiki from 'zashiki/config'

import {
  createRID
} from '@modernpoacher/zashiki-transport'

const RID = zashiki.get('zashiki:rid')

/*
 *  `Promise`
 */
export default {
  assign: 'rid',
  async method (request, h) {
    const rid = await createRID()

    h.state('rid', rid, RID)

    return rid
  }
}
