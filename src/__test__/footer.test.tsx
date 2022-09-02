import { render, screen } from '@testing-library/react'
import Footer from '../shared/components/footer/Footer'

describe('footer render', () => {
  it('return footer with routes', () => {
    render(<Footer />)
    expect(
      screen.getByText(/© 2020 Your Company, Inc. All rights reserved./i)
    ).toBeInTheDocument()
  })
})
