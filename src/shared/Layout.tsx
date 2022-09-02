import React from 'react'
import Navbar from './components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import routes from '../view/routes'
import { utils } from '../utils/utils'
import { useAppDispatch, useAppSelector } from '../features/layout/hook'
import { darkModeChanged, selectDarkMode } from '../features/layout/layoutSlice'
import Footer from './components/footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const keys = utils.selectKeys(location.pathname, routes.routes.navbar)

  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(darkModeChanged())
  }
  const isDarkMode = useAppSelector(selectDarkMode)

  const switchProps = {
    onClick,
    isDarkMode,
  }

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar
        url={keys}
        navigation={routes.routes.navbar}
        switchProps={switchProps}
      >
        <div className="py-10 bg-white dark:bg-slate-600">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl tracking-tight font-bold leading-tight text-gray-900 dark:text-gray-200 ">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0 text-gray-900 dark:text-gray-200 ">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-2">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Navbar>
      <Footer />
    </div>
  )
}
