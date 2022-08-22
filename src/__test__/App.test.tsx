import App from '../App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText('Hello world!'))
  })
})
