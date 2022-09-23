import React from 'react';
import Navbar from './components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import routes from '../view/routes';
import { utils } from '../utils/utils';
import {
  useAppDispatch,
  useAppSelector,
} from '../features/layout/hook';
import {
  darkModeChanged,
  selectDarkMode,
} from '../features/layout/layoutSlice';
import Footer from './components/footer/Footer';
import CommandPallet from './components/command-pallet/CommandPallet';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const keys = utils.selectKeys(
    location.pathname,
    routes.routes.navbar
  );

  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(darkModeChanged());
  };
  const isDarkMode = useAppSelector(selectDarkMode);

  const switchProps = {
    onClick,
    isDarkMode,
  };
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      initials: 'P1',
      name: 'React',
      path: 'https://reactjs.org/',
    },
    {
      id: 2,
      title: 'Project 2',
      initials: 'P2',
      name: 'Next',
      path: 'https://nextjs.org/',
    },
    {
      id: 3,
      title: 'Project 3',
      initials: 'P3',
      name: 'Gatsby',
      path: 'https://www.gatsbyjs.com/',
    },
    {
      id: 4,
      title: 'Project 4',
      initials: 'P4',
      name: 'Vue',
      path: 'https://vuejs.org/',
    },
    {
      id: 5,
      title: 'Project 5',
      initials: 'P4',
      name: 'Vue',
      path: 'https://vuejs.org/',
    },
    {
      id: 6,
      title: 'Project 6',
      initials: 'P4',
      name: 'Vue',
      path: 'https://vuejs.org/',
    },
    {
      id: 7,
      title: 'Project 7',
      initials: 'P4',
      name: 'Vue',
      path: 'https://vuejs.org/',
    },
  ];

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <CommandPallet projects={projects} />
      <Navbar
        url={keys}
        navigation={routes.routes.navbar}
        switchProps={switchProps}
      >
        <div className="bg-white py-10 dark:bg-slate-600">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-200 ">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 py-8 text-gray-900 dark:text-gray-200 sm:px-0 ">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 p-2">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Navbar>
      <Footer />
    </div>
  );
}
