const defaults = {
  zashiki: {
    jid: {
      ttl: 2419200000,
      isSecure: false,
      isHttpOnly: true,
      clearInvalid: true,
      strictHeader: true,
      path: '/'
    },
    rid: {
      ttl: 2419200000,
      isSecure: false,
      isHttpOnly: true,
      clearInvalid: true,
      strictHeader: true,
      path: '/'
    },
    components: {
      alpha: './server/common/components/alpha/components',
      omega: './server/common/components/omega/components',
      embark: './server/common/components/embark/components',
      debark: './server/common/components/debark/components',
      confirm: './server/common/components/confirm/components'
    }
  },
  server: {
    ui: {
      host: 'localhost',
      port: 5001
    },
    route: {
      index: '/',
      alpha: '/{alpha}',
      omega: '/{alpha}/{omega}'
    }
  },
  mongo: {
    ui: {
      uri: 'mongodb://localhost:27017/zashiki-transport',
      options: {}
    }
  }
}

const required = [
  'zashiki:jid',
  'zashiki:rid',
  'zashiki:components',
  'karakuri:baseurl',
  'karakuri:headers',
  'server:ui:host',
  'server:ui:port',
  'server:route:index',
  'server:route:alpha',
  'server:route:omega',
  'mongo:ui:uri',
  'mongo:ui:options',
  'catbox:cache:client',
  'catbox:cache:policy',
  'catbox:caches',
  'catbox:maps'
]

export {
  defaults,
  required
}
