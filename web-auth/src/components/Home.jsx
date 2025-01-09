import React from 'react'
import { Navbar } from './Navbar'

export function Home(){
  return (
     <div className=''>
           <Navbar/>
           <div className='flex flex-col space-y-2 items-center justify-center h-full py-10'>
                  <h2>Auth Check App</h2>
                  <h4 className='text-2xl '>Check out my App for better in various ways</h4>
           </div>
     </div>
  )
}
