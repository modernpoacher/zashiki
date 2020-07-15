export default {
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
      alpha: './components/alpha',
      omega: './components/omega',
      embark: './components/embark',
      debark: './components/debark',
      confirm: './components/confirm'
    }
  },
  karakuri: {
    baseurl: 'http://localhost:5003/api/v1',
    headers: {
      Accept: 'application/hal+json'
    },
    authorisation: {}
  },
  catbox: {
    cache: {
      client: {
        uri: 'mongodb://localhost:27017',
        partition: 'zashiki-mechanism'
      },
      policy: {
        expiresIn: 500000,
        staleIn: 400000,
        staleTimeout: 4500,
        generateTimeout: 5000
      }
    },
    caches: {
      io: {
        member: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        members: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        collection: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        collections: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        evaluation: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        }
      },
      stages: {
        embark: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        alpha: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        omega: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        debark: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        }
      }
    },
    maps: {
      io: {
        members: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        collections: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        }
      },
      stages: {
        embark: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        alpha: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        omega: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        debark: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        },
        confirm: {
          policy: {
            expiresIn: 500000,
            staleIn: 400000,
            staleTimeout: 4500,
            generateTimeout: 5000
          }
        }
      }
    }
  },
  mongoose: {
    schema: {
      evaluation: {
        expires: 2419200
      },
      route: {
        expires: 2419200
      },
      'route-list': {
        expires: 2419200
      },
      state: {
        expires: 2419200
      },
      'state-list': {
        expires: 2419200
      },
      'error-list': {
        expires: 2419200
      }
    }
  },
  server: {
    host: 'localhost',
    port: 5000,
    cors: {
      credentials: true,
      origin: []
    }
  },
  mongo: {
    uri: 'mongodb://localhost:27017/zashiki-transport',
    options: {}
  },
  route: {
    index: '/',
    alpha: '/{alpha}',
    omega: '/{alpha}/{omega}'
  }
}
