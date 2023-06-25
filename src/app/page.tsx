import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hellow World!</h1>

      <p>
        Est officia deserunt minim deserunt eu amet ea. Ex consectetur labore tempor consequat. Ut ex incididunt veniam
        aliquip ad minim. Non minim dolore et voluptate magna esse laboris anim id laborum dolor.
      </p>
      <Button>button</Button>
      <p>Some footer content</p>
    </main>
  )
}
