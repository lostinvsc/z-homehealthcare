import React, { useState, useEffect } from 'react'
import Context from './Context/Context.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'

import Appointments from './Pages/Appointments.jsx'



const App = () => {

  const [toggle, setToggle] = useState(false)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Home /></div>
    },

    {
      path: '/appointments',
      element: <div className='relative overflow-hidden bg-gray-200 min-h-screen max-w-[1500px] mx-auto'><Navbar /> <Appointments /></div>
    },

  ])
  return (

    <>
      <Context.Provider value={{ toggle: toggle, setToggle: setToggle }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>

  )
}

export default App