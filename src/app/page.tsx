'use client'
/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import heroImage from './hero.jpg'
import profileImage from './profile.jpg'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import { CloudLogo } from '@/components/CloudLogo'
import { VideoEmbed } from '@/components/VideoEmbed'
import { TestimonyCarousel } from '@/components/TestimonyCarousel'
import ContactForm from '@/components/ContactForm'

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

//TODO: Make Mobile-friendly

const videos = [
  { src: 'https://www.youtube.com/embed/watMOkqVslQ?controls=0', title: 'Sleeping Sun' },
  { src: 'https://www.youtube.com/embed/cpHlhJU009I?controls=0', title: 'The Unforgiven' },
  { src: 'https://www.youtube.com/embed/yp6jf_dRKIk?controls=0', title: 'Fear of the Dark' },
  { src: 'https://www.youtube.com/embed/6tvlaQTKv7o?controls=0', title: 'Bring Me to Life' },
  // { src: 'https://www.youtube.com/embed/q65x5gU8bBU?controls=0', title: 'Chop Suey!' },
  // { src: 'https://www.youtube.com/embed/Xmt_byRNaTY?controls=0', title: 'Nemo' },
]

const testimonies = [
  {
    client: 'Heidi & Tero',
    date: '2022-05-07',
    message: [
      'We had Elvann play at our wedding five songs in concert style and she did a phenomenal performance. Her harp play and singing was absolutely stunning and exactly what we wanted.  ',
      "We especially liked how Elvann played Nightwish - Amaranth, which was also our song at our wedding ceremony as we left the church, and as it was something Elvann hadn't played before and what was considered hard to play with a harp, but Elvann nailed it.  Elvann is a true professional and i would recommend her to everyone.",
      'Thank you once more! ❤️',
    ],
  },
  {
    client: 'Lisa & Aleksi',
    date: '2022-08-20',
    message: [
      'We were so happy to find and have Elvann to perform in our wedding, it truly elevated our wedding atmosphere. Her touching and artful harp sets were like something out of a fairytale. All of our guests were astonished to hear her perform. ',
      'In our wedding she played two sets, which were beautiful yet different. The first with singing accompanied by the harp, and the other with more ambient harp music, which matched perfectly to the background of the dinner. All the planning and arrangements went super smoothly and she was very professional all the way.',
      'She had a wide variety of different styles from which we got just what we wanted. Would recommend her anytime!',
    ],
  },
  {
    client: 'Tiina & Mikael',
    date: '2022-09-10',
    message: [
      "Elvann played at our wedding on September 2022. She played walking down the aisle music and after the ceremony we had a small three song concert where we got to hear her beautiful voice with the amazing harp. From there she continued with background music with only the harp while guests were congratulating us and the atmosphere couldn't have been better. At the wedding and several weeks after the wedding we kept hearing from our guests how much they loved Elvann.",
      'We had many things to make our wedding special for us and for our guests. Elvann was definitely one of those that really made the occasion super special.',
      'Also, setting everything up and planning the day was super easy with her. An all and all ten out of ten experience, can not recommend enough. Great job, thank you again!',
    ],
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="h-px my-8 border-1 border-primary/10 w-full" />
      <AboutSection />
      <hr className="h-px my-8 border-1 border-primary/10 w-full" />
      <CloudLogosSection />
      <hr className="h-px my-8 border-1 border-primary/10 w-full" />
      <VideoGridSection />
      <hr className="h-px my-8 border-1 border-primary/10 w-full" />
      <TestimonySection />
      <hr className="h-px my-8 border-1 border-primary/10 w-full" />
      <ContactSection />
    </>
  )
}

const HeroSection = () => {
  return (
    <div id="hero-section" className="flex gap-8 w-full pt-10">
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
          <Button variant="default" onClick={() => scrollTo('contact-section')}>
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
  return (
    <div id="testimonies-section" className="flex flex-col gap-8 w-full items-center justify-center text-center">
      <h2>Testimonies</h2>
      <TestimonyCarousel testimonies={testimonies} />
    </div>
  )
}

const ContactSection = () => {
  return (
    <div id="contact-section" className="flex flex-col gap-8 w-full items-center justify-center text-center">
      <h2>Contact</h2>
      <ContactForm />
    </div>
  )
}
