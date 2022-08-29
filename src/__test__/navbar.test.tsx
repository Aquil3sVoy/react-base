import Navbar from '../shared/components/navbar/Navbar'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { utils } from '../utils/utils'
import routes from '../view/routes'
import { BrowserRouter } from 'react-router-dom'
import reducer, { selectDarkMode } from '../features/layout/layoutSlice'
import { RootState } from '../store'
import React from 'react'

describe('Navbar', () => {
  // Same code for all tests
  const children: React.ReactElement = <div>children</div>
  const location = '/'
  const keys = utils.selectKeys(location, routes.routes.navbar)
  const switchProps = {
    onClick: jest.fn(),
    isDarkMode: false,
  }
  it('render navbar with selectKeys', async () => {
    render(
      <Navbar
        url={keys}
        navigation={routes.routes.navbar}
        switchProps={switchProps}
      >
        {children}
      </Navbar>,
      {
        wrapper: BrowserRouter,
      }
    )
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(screen.getByText(/about/i))
    await user.click(screen.getByText(/Open main menu/i))
  })
  it('mock useAppSelector plus darkMode', async () => {
    const state: RootState = {
      layout: {
        darkMode: true,
      },
    }
    const initialValues = selectDarkMode(state)
    const mockUseAppSelector = jest.fn(() => initialValues)
    jest.mock('../features/layout/layoutSlice', () => ({
      useAppSelector: mockUseAppSelector,
      ...reducer,
    }))

    const location = ' '
    const keys = utils.selectKeys(location, routes.routes.navbar)
    const switchProps = {
      onClick: jest.fn(),
      isDarkMode: true,
    }
    render(
      <Navbar
        url={keys}
        navigation={routes.routes.navbar}
        switchProps={switchProps}
      >
        {children}
      </Navbar>,
      {
        wrapper: BrowserRouter,
      }
    )
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
  })
})
