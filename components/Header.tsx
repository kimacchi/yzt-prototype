"use client"

import React, { useEffect, useState } from 'react'
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {IoApps} from "react-icons/io5";
import {MdOutlineLanguage} from "react-icons/md";

const Header = () => {
    const [language, setLanguage] = useState(localStorage.getItem("language") && "tr");
    useEffect(() => {
        if(!localStorage.getItem("language")){
            localStorage.setItem("language", "tr")
        }
    }, [])
    const setLocalStorage = () => {
        if(localStorage.getItem("language") === "en"){
            localStorage.setItem("language", "tr")
            setLanguage("tr");
            window.location.reload()
        }else if(localStorage.getItem("language") === "tr"){
            localStorage.setItem("language", "en")
            setLanguage("en")
            window.location.reload()
        }
        else{
            localStorage.setItem("language", "tr")
            setLanguage("tr")
        }
    }

  return (
    <div className='w-full flex justify-between p-6'>
        <div className='hover:scale-110 transition-all hover:cursor-pointer' tabIndex={0}>
            <IoApps fontSize={24} color="white" />
        </div>
        <div className='flex gap-6 '>
            <div className='border-r-2 border-whiteish flex gap-6 pr-6 h-min'>
                <button className='hover:scale-110 transition-all hover:cursor-pointer'>
                    <AiFillInstagram fontSize={24} color="white" />
                </button>
                <button className='hover:scale-110 transition-all hover:cursor-pointer'>
                    <AiFillYoutube fontSize={24} color="white" />
                </button>
            </div>
            <button className='hover:scale-110 transition-all hover:cursor-pointer flex flex-col items-center justify-center' onClick={setLocalStorage}>
                <MdOutlineLanguage fontSize={24} color="white" />
                <p className='uppercase font-bold text-sm'>{language}</p>
            </button>
        </div>
    </div>
  )
}

export default Header