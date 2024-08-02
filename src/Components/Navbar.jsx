import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Context from '../Context/Context'
import logo from '/logo.png'
import axios from 'axios'
import '../Css/Navbar.css'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const navigate = useNavigate();
    let value = useContext(Context);

    async function logout() {
        let con = confirm("Are you sure you want to logout")
        if (con) {
            let res = await axios.get('https://z-care.onrender.com/logout', {
                withCredentials: true,
            })
            if (res.data.status) {
                toast.success(res.data.message)
                value.setCookie(Cookies.get("clientToken"))
            } else {
                toast.error(res.data.message)

            }
        }
    }

    const scroll = async () => {

        navigate('/')
        setTimeout(() => {
            let about = document.getElementById('about')
            let whoweare = document.getElementById('whoweare')
            let y = whoweare.getBoundingClientRect().y
            window.scrollTo(0, y - 150)
        }, 30);

    }
    if (value) {
        console.log(value)
    }

    const tf = () => {
        let logo = document.getElementById('logo')
        let login = document.getElementById('logintext')
        login.classList.toggle('hidden')
        logo.classList.toggle('invisible')
        value.setToggle(!value.toggle)
    }

    return (


        <nav id='nav' className='flex justify-between  items-center top-0  absolute bg-transparent z-30 '>

            <div>
                <img id='logo' src={logo} className=' ' alt="" />
            </div>

            <div>
                <ul id='cpart' className='flex items-center justify-between font-light'>
                    <li className='cursor-pointer'>
                        <NavLink className={(e) => { if (e.isActive) { return 'text-red-600' } }} to='/'>Home</NavLink>
                    </li>
                    <li className='cursor-pointer'>
                        <NavLink className={(e) => { if (e.isActive) { return 'text-red-600' } }} to='/appointments'>Appointments</NavLink>
                    </li>
                    <li className='cursor-pointer'>
                        <Link id='about' className={(e) => { if (e.isActive) { return 'text-red-600' } }} onClick={() => { scroll() }} to='/'>About Us</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-[20px]'>
                <div id='logintext' className='h-fit px-[15px]  py-[5px] cursor-pointer box-border'>
                    {
                        !value.cookie ?
                            <Link id='login' to='/login'>Login</Link>
                            :
                            <button onClick={() => { logout() }}>Logout</button>
                    }
                </div>

                <div id='menu' className='w-[35px] flex items-center'>
                    <ul id='tbh' className={`flex font-light absolute left-0 mt-[0px] gap-[20px] w-[70%] flex-col items-start pl-[20px] ${value.toggle ? 'visible' : 'hidden'}`}>
                        <li className='cursor-pointer'>
                            <NavLink onClick={() => { value.setToggle(false); tf() }} className={(e) => { if (e.isActive) { return 'text-red-600' } }} to='/'>Home</NavLink>
                        </li>
                        <li className='cursor-pointer'>
                            <NavLink onClick={() => { value.setToggle(false); tf() }} className={(e) => { if (e.isActive) { return 'text-red-600' } }} to='/appointments'>Appointments</NavLink>
                        </li>
                        <li className='cursor-pointer'>
                            <button onClick={() => { value.setToggle(false); tf(); scroll() }} id='about' className={(e) => { if (e.isActive) { return 'text-red-600' } }} >About</button>
                        </li>
                    </ul>
                    <img onClick={() => {
                        tf()

                    }} src="/mennu.svg" alt="" className='cursor-pointer menuimg mt-[-5px]' />
                </div>

            </div>
        </nav>

    )
}

export default Navbar