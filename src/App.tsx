import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './view/routes'

function App() {
  return (
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        {routes.simpleRoutes.map((route) => (
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
