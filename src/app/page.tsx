/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import heroImage from './hero.jpg'
import profileImage from './profile.jpg'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import { CloudLogo } from '@/components/CloudLogo'
import { VideoEmbed } from '@/components/VideoEmbed'

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="h-px my-8  border-1 border-primary/10 w-full" />
      <AboutSection />
      <hr className="h-px my-8  border-1 border-primary/10 w-full" />
      <CloudLogosSection />
      <hr className="h-px my-8  border-1 border-primary/10 w-full" />
      <VideoGridSection />
      <hr className="h-px my-8  border-1 border-primary/10 w-full" />
      <TestimonySection />
      <hr className="h-px my-8  border-1 border-primary/10 w-full" />
      <ContactSection />
    </>
  )
}

const HeroSection = () => {
  return (
    <div id="hero-section" className="flex gap-8 w-full">
      <Image src={heroImage} priority={true} className="rounded-lg object-cover" sizes="25vw" alt="Hero Image" />
      <div id="hero-content" className="flex flex-col gap-6 py-4">
        <h1>Harpist & Vocalist for your special events</h1>
        <p>Rock, metal & video game music for your wedding or special event based in Helsinki.</p>
        <div id="hero-actions" className="flex items-center justify-between">
          <div id="hero-social-links" className="flex gap-2">
            <Link
              target="_blank"
              href="https://open.spotify.com/artist/4wdHhGu6rkUZd7YGapFyhn?si=NYfEhK_IQEiJ5eUE_lR0tA"
            >
              <Button size="icon" variant="ghost">
                <Icons.spotify className="h-5 w-5" />
              </Button>
            </Link>
            <Link target="_blank" href="https://www.youtube.com/channel/UCY3DEEgMSMvjww7v3aKDsig">
              <Button size="icon" variant="ghost">
                <Icons.youtube className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <Button>
            <Icons.calendar className="mr-2 h-4 w-4" /> Book now!
          </Button>
        </div>
      </div>
    </div>
  )
}

const AboutSection = () => {
  return (
    <div id="about-section" className="flex gap-6 max-h-50 items-center  w-full">
      <div id="about-content" className="text-center flex flex-col gap-6">
        <h2>About</h2>
        <p className="px-8">
          Hey there, my name is Elvann and I’m a professional musician based in Helsinki. My arrangements of metal, rock
          and video game music will enchant guests of all ages and make your day unforgettable.
        </p>
        <p>
          Four years ago, I moved away from Montreal, my hometown, to come live and pursue music in the beautiful
          country of Finland. I'm available to play in all kinds of events. I would love to hear your ideas and work
          something out!
        </p>
        <div>
          <Link href="/about">
            <Button variant="link">Learn more...</Button>
          </Link>
        </div>
      </div>
      <Image src={profileImage} priority={true} className="rounded-full object-cover" sizes="25vw" alt="Hero Image" />
    </div>
  )
}

const CloudLogosSection = () => {
  return (
    <div id="logo-cloud-section" className="grid grid-flow-col grid-cols-3 gap-8  items-center  w-full">
      <h2>Music I Love to play...</h2>
      <div id="logo-grid" className="grid grid-cols-3 col-span-2 gap-2 place-center">
        <CloudLogo path="/band-logos/nightwish.png" label="nightwish" />
        <CloudLogo path="/band-logos/iron-maiden-2.png" label="iron-maiden" />
        <CloudLogo path="/band-logos/evanescence.png" label="evanescence" />
        <CloudLogo path="/band-logos/epica.png" label="epica" />
        <CloudLogo path="/band-logos/within-temptation-3.png" label="within-temptation" />
        <CloudLogo path="/band-logos/metallica.png" label="metallica" />
      </div>
    </div>
  )
}

const videos = [
  { src: 'https://www.youtube.com/embed/watMOkqVslQ?controls=0', title: 'Sleeping Sun' },
  { src: 'https://www.youtube.com/embed/cpHlhJU009I?controls=0', title: 'The Unforgiven' },
  { src: 'https://www.youtube.com/embed/yp6jf_dRKIk?controls=0', title: 'Fear of the Dark' },
  { src: 'https://www.youtube.com/embed/6tvlaQTKv7o?controls=0', title: 'Bring Me to Life' },
  { src: 'https://www.youtube.com/embed/q65x5gU8bBU?controls=0', title: 'Chop Suey!' },
  { src: 'https://www.youtube.com/embed/Xmt_byRNaTY?controls=0', title: 'Nemo' },
]

const VideoGridSection = () => {
  return (
    <div id="video-grid-section" className="grid grid-cols-1 gap-8 w-full items-center text-center">
      <h2>Videos</h2>

      <div id="video-grid" className="grid grid-cols-2 gap-6 w-full">
        {videos.map(v => {
          return <VideoEmbed key={v.title} src={v.src} title={v.title} />
        })}
      </div>
      <div>
        <Link target="_blank" href="https://www.youtube.com/@elvannmusic/videos"></Link>
        <Button variant="link">
          <Icons.youtube className="h-5 w-5 mr-2" /> Watch more...
        </Button>
      </div>
    </div>
  )
}

const TestimonySection = () => {
  return <div>Testimonies</div>
}

const ContactSection = () => {
  return <div>Contact</div>
}
