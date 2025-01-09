import React from 'react'
import { Title } from './Title'
import { Button } from './Button'


export const Navbar = () => {

  return (
        <div className="flex flex-col space-y-2 items-center justify-center py-3">
          <nav className='flex flex-row justify-around items-center w-4/5 h-16 bg-slate-300 rounded-full '>
                <div >
                     <Title/> 
                </div>
                <div className='flex flex-row justify-between space-x-3'>
                      <a href='/login'><Button label="Login"/></a>
                      <a href='/register'><Button label="Register"/></a>
                </div>
          </nav>
        </div>
  )
}
