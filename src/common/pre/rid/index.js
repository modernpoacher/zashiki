export default {
  assign: 'rid',
  async method ({ state = {} }) {
    const {
      rid = null
    } = state

    return rid
  }
}
