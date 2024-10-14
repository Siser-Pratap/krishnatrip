import React from 'react'
import { sideLinks } from '../assets/Navbar'

const Side = () => {
  return (
    <div className='h-[15vh] min-h-[15vh] flex justify-evenly overflow-auto bg-[#252525] items-center w-[100vw] gap-[1rem]'>
        {sideLinks.map((sideLinks, index)=>(
          <div className='flex items-center '>
            <div className='flex flex-col justify-center w-[10vw] items-center max-h-[10vh]  gap-[0.2rem]'>
                {/* <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/bungee-jumping.png" alt="bungee-jumping"/> */}
                {sideLinks.src}
                <p className='text-[1.5rem] font-[sideFont] text-gray-300'>{sideLinks.name}</p> 
             </div>
             <hr className='w-[0.1rem] h-[5rem] bg-gray-950 border-none'></hr>
          </div>
            //  <d></d>
          ))}
          
             
             {/* <hr class="vertical-hr">

<style>
  .vertical-hr {
    width: 2px;
    height: 100px;
    background-color: black;
    border: none;
    transform: rotate(90deg);
    margin: 0 10px;
  }
</style> */}

        
    </div>
  )
}

export default Side