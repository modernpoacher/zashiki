export default {
  assign: 'rid',
  method (request, h) {
    h.unstate('rid')

    return null
  }
}
