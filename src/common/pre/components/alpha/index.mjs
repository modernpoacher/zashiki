import getComponents from '#common/components/alpha/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ params }) {
    return getComponents(params)
  }
}
