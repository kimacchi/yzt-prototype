"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect,useState } from 'react'
import main_page_texts from "../src/main_page_texts.json"
import quotes from "../src/quotes.json"
import AnimatedText from '@/components/AnimatedText'
import Links from '@/components/Links'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [texts, setTexts] = useState(main_page_texts[localStorage.getItem("language") === "en" ? "en" : "tr"])
  const [localQuotes, setQuotes] = useState(quotes.quotes);
  const [quote, setQuote] = useState<{text: string, from: string}>()
  useEffect(() => {
    if(!(quote?.text)){
      let index: number = Math.floor(Math.random() * (localQuotes.length - 1))
      setQuote(localQuotes[index]);
    }
    setInterval(() => {
      let index: number = Math.floor(Math.random() * (localQuotes.length - 1))
      while(quote?.text === localQuotes[index].text){
        index = Math.floor(Math.random() * (localQuotes.length - 1));
      }
      setQuote(localQuotes[index]);
    }, 2000)
  }, [localQuotes])


  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:px-96 w-full justify-start md:justify-between">
        <div className='md:w-2/6 w-2/3 flex flex-col items-center justify-center md:mb-0 mb-8'>
          <h1 className='md:text-6xl text-4xl tracking-wide mb-6 text-center md:text-left'>
            {texts.Title}
          </h1>
          <div>
            <AnimatedText quotes={localQuotes} />
          </div>
        </div>
        <div>
          <Links />
        </div>
      </div>
    </>
  )
}
