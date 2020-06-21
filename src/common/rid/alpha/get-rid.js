import debug from 'debug'

import Boom from '@hapi/boom'

import {
  RouteListMaster
} from '@modernpoacher/zashiki-transport/lib/stores/components/route-list/master'

import {
  mapAlphaStage
} from '@modernpoacher/zashiki-transport/lib/maps'

import {
  getAlphaFromCache
} from '@modernpoacher/zashiki-transport/lib/caches'

import {
  NOT_FOUND
} from 'zashiki/common/exception'

const routeListMaster = new RouteListMaster()

const log = debug('zashiki:common:rid:alpha:get-rid')

log('`getRID` is awake')

export default async function getRID ({ pre: { jid } = {}, state = {}, params = {} }) {
  const {
    aid
  } = await getAlphaFromCache(await mapAlphaStage(params))

  const routeList = routeListMaster.use(jid)
  const resource = {
    alpha: aid
  }

  if (await routeList.hasAlpha(resource)) {
    const {
      rid
    } = await routeList.getAlpha(resource)

    return rid
  }

  throw Boom.notFound(NOT_FOUND)
}
