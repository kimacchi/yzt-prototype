"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect,useState } from 'react'
import main_page_texts from "../src/main_page_texts.json"
import quotes from "../src/quotes.json"
import AnimatedText from '@/components/AnimatedText'


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
      <div>

        <div>
          <p className='text-6xl tracking-wide'>
            {texts.Title}
          </p>
          <div>
            <AnimatedText quote={localQuotes[0].text} />
          </div>
        </div>

        <div>

        </div>
      </div>
    </>
  )
}
