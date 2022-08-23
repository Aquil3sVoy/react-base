import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <Outlet />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}
