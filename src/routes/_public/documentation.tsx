import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/documentation')({
  component: () => <div>Hello /_public/documentation!</div>
})