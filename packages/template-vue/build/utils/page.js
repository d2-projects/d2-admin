import { groupBy, mapValues } from 'lodash'
import { mapTree } from '../../common/utils/array.js'

const replaceRoutes = (routes, scope) => mapTree(routes, route => {
  if (route.name) {
    route.name = route.name === scope ? 'index' : route.name.replace(RegExp(`^${scope}-`), '')
  }
  if (route.path) {
    route.path = route.path === `/${scope}` ? '/' : route.path.replace(RegExp(`^/${scope}/`), '/')
  }
  return route
})

export const projectRoutes = (routes = []) => mapValues(
  groupBy(routes, e => e.path.split('/')[1]),
  (value, key) => replaceRoutes(value, key)
)
