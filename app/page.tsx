"use client"

import { useEffect,useState } from 'react'
import main_page_texts from "../src/main_page_texts.json"
import quotes from "../src/quotes.json"
import AnimatedText from '@/components/AnimatedText'
import Links from '@/components/Links'



export default function Home() {
  const [texts, setTexts] = useState(main_page_texts[localStorage.getItem("language") === "en" ? "en" : "tr"])
  


  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full justify-start md:justify-around h-full">
        <div className='md:w-2/6 w-2/3 flex flex-col items-center justify-center md:mb-0 mb-8'>
          <h1 className='md:text-6xl text-4xl tracking-wide mb-6 text-center md:text-left'>
            {texts.Title}
          </h1>
          <div>
            <AnimatedText quotes={quotes.quotes} />
          </div>
        </div>
        <div>
          <Links />
        </div>
      </div>
    </>
  )
}
