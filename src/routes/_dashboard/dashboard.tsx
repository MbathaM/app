import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard')({
  component: Dashboard
})

function Dashboard(){
  return (
    <>
<div className="p-2">Hello from Dashboard!</div>
<hr />
<Outlet />
</>

  )
}