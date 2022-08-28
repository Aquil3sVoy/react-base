import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { utils } from './utils/utils'
import routes from './view/routes'

function App() {
  const routesAsFlat = utils.uniqueRoute(routes?.routes as never)
  return (
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        {routesAsFlat.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />}>
            {route.childrens.map((children) => (
              <Route
                key={children.path}
                path={children.path}
                element={<children.element />}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
