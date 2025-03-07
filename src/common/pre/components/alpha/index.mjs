import getComponents from '#zashiki/common/components/alpha/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ params }) {
    return getComponents(params)
  }
}
