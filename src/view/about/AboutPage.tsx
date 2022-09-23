import { Outlet } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h2>Who are we?</h2>
      <Outlet />
    </>
  );
}
