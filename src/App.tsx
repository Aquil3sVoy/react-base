import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { utils } from './utils/utils';
import routes from './view/routes';

function App() {
  const routesAsFlat = utils.uniqueRoute(
    routes?.routes as never
  );

  return (
    <Suspense
      fallback={
        <p className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          Loading...
        </p>
      }
    >
      <Routes>
        {routesAsFlat.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          >
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
  );
}

export default App;
