import { Icons } from '@/components/icons'

export  function Loading() {
  return (
    <section className="fixed left-0 top-0 flex size-full items-center justify-center">
      <Icons.spinner className="mr-2 size-20 animate-spin text-primary" />
    </section>
  )
}
