import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">
          <Button variant="default">
            <Icons.chevronLeft className="mr-2 h-4 w-4" /> return to homepage
          </Button>
        </Link>
      </p>
    </div>
  )
}
