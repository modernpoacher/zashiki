import dotenv from 'dotenv'
import nconf from 'nconf'

import {
  defaults,
  required
} from './nconf/index.mjs'

dotenv
  .config({ path: 'config.env' }) // process.cwd()

nconf
  .argv().env()
  .file({ file: nconf.get('file') || 'config.json' }) // process.cwd()
  .defaults(defaults)
  .required(required)

export * from '@modernpoacher/zashiki-transport/lib/config/index.js'

export default {
  get (key) {
    return nconf.get(key)
  }
}
