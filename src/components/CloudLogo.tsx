import { FC } from 'react'
import Image from 'next/image'

interface CloudLogoProps {
  path: string
  label: string
}

export const CloudLogo: FC<CloudLogoProps> = ({ path, label }) => {
  return (
    <div className="flex p-4">
      <Image src={path} width={300} height={300} className="object-contain" sizes="25vw" alt={label} />
    </div>
  )
}
