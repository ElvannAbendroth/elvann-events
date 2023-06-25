'use client'
import { FC, useState } from 'react'
import { Icons } from './Icons'

interface TestimonyCarouselProps {
  testimonies: Array<any>
}

export const TestimonyCarousel: FC<TestimonyCarouselProps> = ({ testimonies }) => {
  const [activeCard, setActiveCard] = useState(0)

  const goToPrevious = () => {
    const lastIndex = testimonies.length - 1
    setActiveCard(activeCard === 0 ? lastIndex : activeCard - 1)
  }

  const goToNext = () => {
    const lastIndex = testimonies.length - 1
    setActiveCard(activeCard === lastIndex ? 0 : activeCard + 1)
  }

  if (activeCard === null) {
    return null
  }

  return (
    <div id="testimony-cards" className="flex gap-8 w-full items-center h-[550px] ">
      <div>
        <Icons.chevronLeft
          className="h-6 w-6 cursor-pointer text-primary hover:text-primary-hover"
          onClick={goToPrevious}
        />
      </div>

      <div
        className="flex flex-col border-2 border-muted/20 border-dotted p-12 rounded-lg gap-4 bg-white  items-center justify-center"
        key={testimonies[activeCard].client}
      >
        {testimonies[activeCard].message.map((m: string) => {
          return (
            <p className="" key={m[0]}>
              {m}
            </p>
          )
        })}
        <p>*****</p>
        <p className="italic">- {testimonies[activeCard].client}</p>
      </div>
      <div>
        <Icons.chevronRight
          className="h-6 w-6 cursor-pointer text-primary hover:text-primary-hover"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}
