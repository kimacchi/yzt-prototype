"use client"

import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
import main_page_texts from "../src/main_page_texts.json"
import quotes from "../src/quotes.json"
import AnimatedText from '@/components/AnimatedText'
import Links from '@/components/Links'
import News from '@/components/News'
import {BsChevronCompactDown} from "react-icons/bs";



export default function Home() {
  const router = useRouter();
  const [texts, setTexts] = useState(main_page_texts[localStorage.getItem("language") === "en" ? "en" : "tr"])


  return (
    <>
      <div className='h-full w-full flex flex-col items-center pt-32 md:pt-0'>
        <div className='fixed z-[-1] h-[30rem] w-[30rem] left-0 backdrop-blur-3xl rounded-full opacity-60'>
          <div className='h-full w-full bg-gradient-purple backdrop-blur-3xl'></div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full justify-start md:justify-around h-full">
          <div className='md:w-2/6 w-2/3 flex flex-col items-center justify-center md:mb-0 mb-8'>
            <h1 className='md:text-6xl text-4xl tracking-wide mb-6 text-center md:text-left text-purple-600'>
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
        <a 
          className='absolute bottom-8 transition-all hover:scale-110 hidden md:block'
          href="#news"
        >
          <BsChevronCompactDown fontSize={48} color='white' />
        </a>
      </div>
      <div id="news" className='w-full'>
        <News />
      </div>
    </>
  )
}
