import { Button } from '@/components/ui/button'
import Image from 'next/image'
import heroImage from './hero.jpg'
import { Icons } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <div id="hero-section" className="flex gap-6 max-h-50">
        <Image src={heroImage} priority={true} className="rounded object-cover" sizes="25vw" alt="Hero Image" />
        <div id="hero-content" className="flex flex-col gap-6">
          <h1>Harpist & Vocalist for your special events</h1>
          <p>Rock, metal & video game music for your wedding or special event based in Helsinki.</p>
          <div id="hero-actions" className="flex items-center justify-between">
            <div id="hero-social-links" className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Icons.spotify className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icons.youtube className="h-5 w-5" />
              </Button>
            </div>
            <Button>
              <Icons.calendar className="mr-2 h-4 w-4" /> Book now!
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
