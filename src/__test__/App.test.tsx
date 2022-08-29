import App from '../App'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { utils } from '../utils/utils'
import routes from '../view/routes'

describe('App', () => {
  it('Render all routes including repeated routes', async () => {
    const mapRoutes = utils.flatRoute(routes?.routes as never)
    for (const values of mapRoutes) {
      render(
        <>
          <div>{values.name}</div>
          <div>{values.path}</div>
          <div>{values.index}</div>
          <div>{values.element()} </div>
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
