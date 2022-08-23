import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <main>
        hello world
        <Outlet />
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
