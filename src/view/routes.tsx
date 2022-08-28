import { lazy } from 'react'
import { RoutesProps } from '../utils/types'
import { About, AboutMessage } from './about/index'
import { Home, HomeMessage } from './home/index'

const NotFound = lazy(() => import('./shared/errors/Error404Page'))
const Forbidden = lazy(() => import('./shared/errors/Error403Page'))
const InternalServer = lazy(() => import('./shared/errors/Error500Page'))

const routes: RoutesProps = {
  navbar: [
    {
      name: 'Home',
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
      name: 'About',
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
  ],
  footer: [
    {
      name: 'Home',
      path: '/',
      index: false,
      element: () => <div>Footer</div>,
      childrens: [
        {
          path: '/children',
          element: () => <div>Footer children</div>,
        },
      ],
    },
  ],
  default: [
    {
      name: 'Forbidden',
      path: '/403',
      index: false,
      element: () => <Forbidden />,
      childrens: [],
    },
    {
      name: 'InternalServer',
      path: '/500',
      index: false,
      element: () => <InternalServer />,
      childrens: [],
    },
    {
      name: 'Not Found',
      path: '*',
      index: false,
      element: () => <NotFound />,
      childrens: [],
    },
  ],
}

export default {
  routes,
}
