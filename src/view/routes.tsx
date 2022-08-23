import { lazy } from 'react'
import { About, AboutMessage } from './about/index'
import { Home, HomeMessage } from './home/index'

const NotFound = lazy(() => import('./shared/errors/Error404Page'))
const Forbidden = lazy(() => import('./shared/errors/Error403Page'))
const InternalServer = lazy(() => import('./shared/errors/Error500Page'))

const simpleRoutes = [
  {
    path: '/',
    index: true,
    element: () => <Home />,
    childrens: [
      {
        path: '/',
        element: () => <HomeMessage />,
      },
    ],
  },
  {
    path: '/about',
    index: false,
    element: () => <About />,
    childrens: [
      {
        path: '/about',
        element: () => <AboutMessage />,
      },
    ],
  },
  {
    path: '/403',
    index: false,
    element: () => <Forbidden />,
    childrens: [],
  },
  {
    path: '/500',
    index: false,
    element: () => <InternalServer />,
    childrens: [],
  },
  {
    path: '*',
    index: false,
    element: () => <NotFound />,
    childrens: [],
  },
].filter(Boolean)

export default {
  simpleRoutes,
}
