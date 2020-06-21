import debug from 'debug'

import Boom from '@hapi/boom'

import {
  RouteListMaster
} from '@modernpoacher/zashiki-transport/lib/stores/components/route-list/master'

import {
  mapAlphaOmega
} from '@modernpoacher/zashiki-transport/lib/maps'

import {
  getOmegaFromCache
} from '@modernpoacher/zashiki-transport/lib/caches'

import {
  NOT_FOUND
} from 'zashiki/common/exception'

const routeListMaster = new RouteListMaster()

const log = debug('zashiki:common:rid:omega:get-rid')

log('`getRID` is awake')

export default async function getRID ({ pre: { jid } = {}, state = {}, params = {} }) {
  log('getRID')

  const {
    aid,
    oid
  } = await getOmegaFromCache(await mapAlphaOmega(params))

  const routeList = routeListMaster.use(jid)
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
