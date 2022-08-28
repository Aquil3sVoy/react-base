import App from '../App'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Navbar from '../shared/components/navbar/Navbar'
import userEvent from '@testing-library/user-event'
import { utils } from '../utils/utils'
import routes from '../view/routes'

describe('App', () => {
  it('render all the routes', async () => {
    const mapRoutes = utils.flatRoute(routes?.routes as never)
    for (const values of mapRoutes) {
      render(
        <>
          <div>{values.name}</div>
          <div>{values.path}</div>
          <div>{values.index}</div>
          <div>{values.element()}</div>
          {values.childrens.map((child) => (
            <div key={child.path}>
              <div>{values.path}</div>
              <div>{child.element()}</div>
            </div>
          ))}
        </>
      )
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
    }
  })
  it('render navbar with selectKeys', async () => {
    const children = <div>children</div>
    const location = { pathname: '/' }
    const keys = utils.selectKeys(location.pathname, routes.routes.navbar)

    render(
      <Navbar url={keys} navigation={routes.routes.navbar}>
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
  it('render navbar without selectKeys ', async () => {
    const children = <div>children</div>
    const location = { pathname: ' ' }
    const keys = utils.selectKeys(location.pathname, routes.routes.navbar)

    render(
      <Navbar url={keys} navigation={routes.routes.navbar}>
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
  it('Render app with 404', async () => {
    // use navigate or useNavigate (redirect) as hook from react-router-dom to test 404
    const badRoute = '/some/bad/route'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Error404Page/i)).toBeInTheDocument()
  })
  it('Render app with 403', async () => {
    // use navigate or useNavigate (redirect) as hook from react-router-dom to test 403
    const badRoute = '/403'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Error403Page/i)).toBeInTheDocument()
  })
  it('Render app with 500', async () => {
    // use navigate or useNavigate (redirect) as hook from react-router-dom to test 500
    const badRoute = '/500'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Error500Page/i)).toBeInTheDocument()
  })
})
