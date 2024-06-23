import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard/settings')({
  component: () => <div>Hello /_dashboard/dashboard/settings!</div>
})