import React from 'react'
import { sideLinks } from '../assets/Navbar'

const Side = () => {
  return (
    <div className='h-[15vh] min-h-[15vh] flex justify-evenly overflow-auto bg-[#252525] items-center w-[100vw] gap-[1rem]'>
        {sideLinks.map((sideLinks, index)=>(
            <div className='flex flex-col justify-center items-center max-h-[10vh]  gap-[0.2rem]'>
                {/* <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/bungee-jumping.png" alt="bungee-jumping"/> */}
                {sideLinks.src}
                <p className='text-[1.5rem] font-[sideFont] text-gray-300'>{sideLinks.name}</p> 
            </div>
          ))}
             
        
    </div>
  )
}

export default Side