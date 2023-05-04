"use client"

import React, { useEffect, useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
    const [language, setLanguage] = useState(localStorage.getItem("language"));
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
        <div className='hover:scale-110 transition-all hover:cursor-pointer'>
            <AppsIcon fontSize="large" />
        </div>
        <div className='flex gap-6 '>
            <div className='border-r-2 border-whiteish flex gap-6 pr-6 h-min'>
                <div className='hover:scale-110 transition-all hover:cursor-pointer'>
                    <InstagramIcon fontSize="large" />
                </div>
                <div className='hover:scale-110 transition-all hover:cursor-pointer'>
                    <YouTubeIcon fontSize="large" />
                </div>
            </div>
            <div className='hover:scale-110 transition-all hover:cursor-pointer flex flex-col items-center justify-center' onClick={setLocalStorage}>
                <LanguageIcon fontSize="large" />
                <p className='uppercase font-bold'>{language}</p>
            </div>
        </div>
    </div>
  )
}

export default Header