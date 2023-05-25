import getResourceUrl from './get-resource-url.mjs'

export default function getRedirectResourceUrl ({ redirect } = {}) {
  return getResourceUrl(redirect)
}
