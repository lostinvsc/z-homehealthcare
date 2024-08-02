import React, { useState, useEffect } from 'react'
import Context from './Context/Context.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Appointments from './Pages/Appointments.jsx'
import Cookies from 'js-cookie'

const App = () => {
  const [cookie, setCookie] = useState()
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    let value = Cookies.get("clientToken")
    setCookie(value)
  }, [])


  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Home /></div>
    },
    {
      path: '/login',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Login /></div>
    },
    {
      path: '/signup',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Signup /></div>
    },
    {
      path: '/appointments',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Appointments /></div>
    },

  ])
  return (

    <>
      <Context.Provider value={{ cookie: cookie, setCookie:setCookie , toggle:toggle , setToggle:setToggle }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>

  )
}

export default App