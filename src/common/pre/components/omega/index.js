import getComponents from 'zashiki/common/components/omega/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ params }) {
    return getComponents(params)
  }
}
