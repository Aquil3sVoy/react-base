import { RouteProps } from './types'

export const utils = {
  classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
  },
  selectKeys(url: string, keys: RouteProps[]) {
    const match = keys.find((option) => {
      return url === option.path || url === '/'
    })
    if (match) {
      return [match.path]
    }
    return []
  },
  flatRoute(obj: RouteProps[]) {
    const mapObject = Object.values(obj).map((item: RouteProps) => item)
    return mapObject.flat()
  },
  uniqueRoute(obj: RouteProps[]) {
    const mapObject = Object.values(obj).map((item: RouteProps) => item)
    const unique = [
      ...new Map(mapObject.flat().map((m: RouteProps) => [m.path, m])).values(),
    ]
    return unique
  },
}
