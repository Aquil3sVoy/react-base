import App from '../App'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
// import { renderWithProviders } from '../utils/test-utils'

describe('App', () => {
  it('Render app', async () => {
    render(<App />, { wrapper: BrowserRouter })
    const user = userEvent.setup()
    // suspend fallback only shows when the component is not yet loaded
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
    expect(screen.getByText(/From Home/i)).toBeInTheDocument()
    await user.click(screen.getByText(/about/i))
    // suspend fallback only shows when the component is not yet loaded
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText('Who are we?')).toBeInTheDocument()
    expect(
      screen.getByText(
        /That feels like an existential question, don't you think?/i
      )
    ).toBeInTheDocument()
  })
  it('Render app with 404', async () => {
    const badRoute = '/some/bad/route'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText(/Error404Page/i)).toBeInTheDocument()
  })
  it('Render app with 403', async () => {
    // use navigate or useNavigate as hook from react-router-dom to test 403
    const badRoute = '/403'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText(/Error403Page/i)).toBeInTheDocument()
  })
  it('Render app with 500', async () => {
    // use navigate or useNavigate as hook from react-router-dom to test 500
    const badRoute = '/500'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(screen.getByText(/Error500Page/i)).toBeInTheDocument()
  })
})
