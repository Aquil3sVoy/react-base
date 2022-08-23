import { lazy } from 'react'

const Home = lazy(() => import('./HomePage'))
const HomeMessage = lazy(() => import('./HomeMessage'))

export { Home, HomeMessage }
