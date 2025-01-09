import React from 'react'
import { Heading } from './Box-components/Heading'
import { SubHeading } from './Box-components/SubHeading'
import { useState } from 'react'
import { Button } from './Button'
import axios from 'axios'

export const Login = () => {
    const [username,SetUsername] = useState('')
    const [password,Setpassword] = useState('')
  return (
    <div>
        <div  className="flex flex-col justify-center items-center bg-indigo-400 bg-opacity-50 h-screen ">
          <div className='w-80 h-max rounded-lg bg-indigo-600 bg-opacity-70 p-4 backdrop-blur-none'>
              <Heading heading="Login"/>
              <SubHeading onChange={e =>{SetUsername(e.target.value);}} label="Username" placeholder="surya123"/>
              <SubHeading onChange={e =>{Setpassword(e.target.value);}} label="Password" placeholder="Sur1ya@124"/>
              <div className="flex flex-col p-2 w-full items-center">
                 <Button label="Login" onClick={async ()=>{
                     const response = await axios.post("http://localhost:3000/api/v1/user/Signin",{
                      username,
                      password,
                 
                    })
                    localStorage.setItem("token",response.data.token)
                }} 
                  
                />
                 <p className='text-slate-300 text-md'>Already have an account? <a href="/register" className="underline">Register</a></p>      
              </div>
              
        </div>
        </div>
    </div>
  )
}