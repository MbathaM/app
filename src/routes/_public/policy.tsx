import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/policy')({
  component: () => <div>Hello policy!</div>
})