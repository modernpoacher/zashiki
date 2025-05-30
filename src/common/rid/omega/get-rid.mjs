import debug from '#zashiki/config/debug'

import Boom from '@hapi/boom'

import {
  RouteListMaster
} from '@modernpoacher/zashiki-transport/stores/components/route-list/master'

import {
  mapAlphaOmegaStage
} from '@modernpoacher/zashiki-transport/maps'

import {
  getOmegaFromCache
} from '@modernpoacher/zashiki-transport/caches'

import {
  NOT_FOUND
} from '#zashiki/common/exception'

const routeListMaster = new RouteListMaster()

const log = debug('zashiki/common/rid/omega/get-rid')

log('`zashiki` is awake')

export default async function getRID ({ pre: { zid } = {}, state = {}, params = {} }) {
  log('getRID')

  const {
    aid,
    oid
  } = await getOmegaFromCache(await mapAlphaOmegaStage(params))

  const routeList = routeListMaster.use(zid)
  const resource = {
    alpha: aid,
    omega: oid
  }

  if (await routeList.hasOmega(resource)) {
    const {
      rid
    } = await routeList.getOmega(resource)

    return rid
  }

  throw Boom.notFound(NOT_FOUND)
}
