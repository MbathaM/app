import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      Welcome Home!
    </div>
  )
}
