'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Icons } from './Icons'
import { Button } from './ui/button'

//TODO: Create toaster notifications
//TODO: make TSX

export default function ContactForm() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm('service_zdxp318', 'template_127lq8g', form.current, 'zx0BpyPnkUrfspJ6i')
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error.text)
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full" action="/action_page.php">
      <div className="relative top-0 h-full w-full">
        <label className="absolute h-full top-0 px-3 py-2" htmlFor="name">
          <Icons.user className="h-4 w-4 text-muted absolute z-10" />
        </label>
        <input
          className="relative top-0 pl-10 rounded-md w-full h-8"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        ></input>
      </div>

      <div className="relative top-0 h-full w-full">
        <label className="absolute h-full top-0 px-3 py-2" htmlFor="email">
          <Icons.at className="h-4 w-4 text-muted absolute z-10" />
        </label>
        <input
          className="relative top-0 pl-10 rounded-md w-full h-8"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>

      <div className="relative top-0 h-full w-full">
        <label className="absolute h-full top-0 px-3 py-2" htmlFor="subject">
          <Icons.tag className="h-4 w-4 text-muted absolute z-10" />
        </label>
        <input
          className="relative top-0 pl-10 rounded-md w-full h-8"
          type="text"
          id="email"
          name="subject"
          placeholder="Subject"
        />
      </div>

      <div className="relative top-0 h-full w-full">
        <label className="absolute h-full top-0 px-3 py-2" htmlFor="message">
          <Icons.message className="h-4 w-4 text-muted absolute z-10" />
        </label>
        <textarea
          className="relative top-0  pl-10 py-1 rounded-md min-h-[8rem] w-full"
          id="message"
          name="message"
          placeholder="Type your message..."
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit">Send</Button>
      </div>
    </form>
  )
}
