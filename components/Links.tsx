import React from 'react'

const Links = () => {
  return (
    <div className='border-borderColor border-8 p-4 rounded-lg flex flex-col gap-2 min-w-'>
        <div className='flex gap-2'>
          <div className='w-5 h-5 rounded-full bg-redCircle'></div>
          <div className='w-5 h-5 rounded-full bg-yellowCircle'></div>
          <div className='w-5 h-5 rounded-full bg-greenCircle'></div>
        </div>
        <div className='flex gap-12'>
          <div className='flex flex-col text-xl md:text-2xl text-grayCode'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>
          <div className='flex flex-col text-xl md:text-2xl w-full'>
            <a href="/" className='w-full text-right transition-all hover:scale-105 opacity-60 hover:opacity-100'>
              <p className='text-left'>
                <span className='text-purpleCode font-bold'>def{" "}</span>
                <span className='text-blueCode font-bold'>JoinServer{"():"}</span>
              </p>
              <span className='w-full text-right text-redCode font-bold'>{"openDiscord()"}</span>
            </a>
            <br></br>
            <a href="/" className='w-full text-right transition-all hover:scale-105 opacity-60 hover:opacity-100'>
              <p className='text-left'>
                <span className='text-purpleCode font-bold'>def{" "}</span>
                <span className='text-blueCode font-bold'>ViewNews{"():"}</span>
              </p>
              <span className='w-full text-right text-redCode font-bold'>{"openNewsPage()"}</span>
            </a>
            <br></br>
            <a href="/" className='w-full text-right transition-all hover:scale-105 opacity-60 hover:opacity-100'>
              <p>
                <span className='text-purpleCode font-bold'>def{" "}</span>
                <span className='text-blueCode font-bold'>EnterSystem{"():"}</span>
              </p>
              <span className='w-full text-right text-redCode font-bold'>{"accessSystem()"}</span>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Links