import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard')({
  component: Dashboard
})

function Dashboard(){
  return (
    <>
<div className="p-2">Hello from Dashboard!</div>
<hr />
    <div className="p-2 flex gap-2">
  {/* <Link to="/signup" className="[&.active]:font-bold">
    Signup
  </Link> */}
  <Link to="/dashboard/profile" className="[&.active]:font-bold">
  profile
  </Link>
</div>
<hr />
<Outlet />
</>

  )
}