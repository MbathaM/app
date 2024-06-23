import { useAuth } from '@/auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: Profile
})

function Profile(){
  const {user} = useAuth()
  return (
    <>
    <h3 className="text-3xl font-bold underline">
     Profile
    </h3>
    <pre className="whitespace-pre-wrap">
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  )
}