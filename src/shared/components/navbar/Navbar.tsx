import { Disclosure } from '@headlessui/react'
import { utils } from '../../../utils/utils'
import { XMarkIcon, Bars3Icon, CubeIcon } from '@heroicons/react/24/outline'
import { RouteProps } from '../../../utils/types'
import { Link } from 'react-router-dom'
import Toogle from '../../elements/Toogle'

export default function Navbar({
  children,
  url,
  navigation,
  switchProps,
}: {
  children: React.ReactNode
  url: string[]
  navigation: RouteProps[]
  switchProps: {
    onClick: () => void
    isDarkMode: boolean
  }
}) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="bg-white dark:bg-slate-800 border-b border-gray-200"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                      <CubeIcon className="block lg:hidden h-8 w-auto dark:text-gray-100" />
                      <CubeIcon className="hidden lg:block h-8 w-auto dark:text-gray-100" />
                    </Link>

                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={utils.classNames(
                            url.includes(item.path)
                              ? 'border-indigo-500 text-gray-900 dark:text-gray-100'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-500 dark:hover:border-gray-200 dark:hover:text-gray-400',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={
                            url.includes(item.path) ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                      <div className="mr-6 inline-flex">
                        <Toogle
                          enabled={switchProps.isDarkMode}
                          setEnabled={switchProps.onClick}
                        />
                      </div>
                      <a
                        href="#"
                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-500"
                      >
                        Sign in
                      </a>
                      <a
                        href="#"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-indigo-600 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700 dark:bg-indigo-800 dark:text-gray-100 dark:hover:bg-indigo-900 dark:hover:text-gray-100"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.path}
                      className={utils.classNames(
                        url.includes(item.path)
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={
                        url.includes(item.path) ? 'page' : undefined
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center bg-indigo-600 px-4 py-2 border border-transparent rounded-md text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500 mb-6">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {children}
      </div>
    </>
  )
}
