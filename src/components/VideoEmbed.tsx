import { FC } from 'react'

interface VideoEmbedProps {
  src: string
  title: string
}

export const VideoEmbed: FC<VideoEmbedProps> = ({ src, title }) => {
  return (
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}
