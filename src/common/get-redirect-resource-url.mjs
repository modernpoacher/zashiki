import debug from 'debug'

import getResourceUrl from './get-resource-url.mjs'

const log = debug('zashiki/common/get-redirect-resource-url')

log('`zashiki` is awake')

export default function getRedirectResourceUrl ({ redirect } = {}) {
  log('getRedirectResourceUrl')

  return getResourceUrl(redirect)
}
