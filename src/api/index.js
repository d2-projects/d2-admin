import { assign, map } from 'lodash'
import { request } from './service'

const files = require.context('./modules', false, /\.js$/)
const generators = files.keys().map(key => files(key).default)

export default assign({}, ...map(generators, generator => generator({ request })))
