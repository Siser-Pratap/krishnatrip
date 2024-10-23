"use client"

import React from 'react'
import Link from 'next/link'
import { navLinks } from '../assets/Navbar'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'




const Navbar = () => {

  const [cart, setcart] = useState(3);
  const [small, setsmall] = useState(true);

  const container = useRef();
  const krishna = useRef();
  const fullPageNav = useRef();
  const navButtons = useRef();
  const navValues = useRef();

  

  useGSAP(() => {
    krishna.current.addEventListener('click', () => {
      gsap.to(krishna.current, {
        x: 100,
        duration: 2,
        delay: 1,
        rotate: 720,
      });
  });
});

 useGSAP(()=>{
    navButtons.current.addEventListener('click', ()=>{
      t1.to(krishna.current, {
        x:200,
        duration:1,
      })
      t1.to(navValues.current, {
        x:200,
        duration:1,
        stagger:0.1,
      })
    })
 })

  return (


        

        <div className='fixed w-full top-0 m-0 bg-inherit min-w-40'>
          <div ref={container} className='hello flex justify-between items-center p-2'>
            <Link href="/" onClick={window.scrollTo(0,0)}>
              <img ref={krishna} src="/favicon.jpg" className="krishna p-5 h-28 w-28 min-w-28" alt="KrishnaTrip"/>
            </Link>
            <div className='smNav hidden sm:flex flex-row gap-6 items-center'>
                    {
                      navLinks.map((link, index)=>(
                        <Link className="mt-[0.3rem]" key={index} href={`/${link}`}>{link}</Link>)
                        )
                    }
                  <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" >
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                  <div className='flex gap-0 items-center'>
                      <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                        <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
                      </svg>
                      <p className='mt-[0.3rem]'>{cart}</p>
                  </div>
                  <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                      <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                      <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                  </svg>
            </div>
            <div className='p-2 sm:hidden' onClick={() => { setsmall(!small) }}>
              <button ref={navButtons} className='border-none navItems'>
                    {small ? (
                      <img className='navButtons' width="28" height="28" src="https://img.icons8.com/material-sharp/24/restaurant-menu.png" alt="restaurant-menu" />
                    ) : (
                      <svg className="navButtons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 64 64">
                        <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
                      </svg>
                    )}
              </button>
            </div>
            {!small&&(
              <div ref={fullPageNav} className='fullPageNav fixed left-0 bg-red-600 top-0 w-[80%] h-[100vh] sm:hidden '>
                <div className='values flex flex-col gap-4 justify-start'>
                  {
                    navLinks.map((link, index)=>(
                      <Link ref={navValues} className="mt-[0.3rem] navValues bg-red-600" key={index} href={`/${link}`}>{link}</Link>)
                      )
                  }
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6 svg">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                  <div className='flex svg gap-0 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                      <path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
                    </svg>
                    <p className='mt-[0.3rem]'>{cart}</p>
                  </div>
                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 svg">
                      <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>


    
  )
}

export default Navbar