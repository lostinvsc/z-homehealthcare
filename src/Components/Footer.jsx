import React from 'react'
import logo from '/logo.png'
import '../Css/footer.css'
import { Link } from 'react-router-dom'
import location from '/location.svg'
import call from '/call.svg'
import mail from '/mail.svg'
const Footer = () => {
    return (
        <div id='fhead' className='m-auto flex justify-between border-t-[2px] border-gray-400 mt-[100px] py-[20px] flex-wrap '>

                <img className='w-[250px] object-contain' id='logoimage' src={logo} alt="" />
            <div className='flex gap-[20px] flex-wrap'>
                <div>
                    <h1 className='font-semibold mb-[10px]'>Quick Links</h1>
                    <ul className='flex flex-col text-gray-600 font-light gap-[10px]'>
                        <li>
                            <Link className='hover:text-blue-500' to='/' onClick={() => { scrollTo(0, 0) }}>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-500' to='/appointments' onClick={() => { scrollTo(0, 0) }}>Appointments</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-500' to='/' onClick={() => { scrollTo(0, 400) }}>About Us</Link>
                        </li>


                    </ul>
                </div>
            </div>

            <div className='flex  flex-col'>
                <h1 className='font-semibold text-black mb-[10px] '>Hours</h1>
                <div className='flex gap-[20px]'>

                    <ul className='text-gray-600 font-light'>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                        <li>Saturday</li>
                        <li>Sunday</li>
                    </ul>
                    <ul className='text-gray-600 font-light'>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>
                        <li>6:30AM - 11:00PM</li>

                    </ul>
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className='font-semibold mb-[10px]'>Contact</h1>
                <span className='flex items-center gap-[10px] text-[15px] '><img src={call} className='w-[30px]' alt="" /> <a href="tel:9413917485" className='hover:text-blue-500'>+91 9413917485</a> </span>
                <span className='flex items-center gap-[10px] text-[15px] my-[5px]'><img src={mail} className='w-[30px]' alt="" /> <a href="mailto:z.careatyourhome@gmail.com" className='hover:text-blue-500 flex flex-wrap'>z.careatyourhome@gmail.com</a> </span>
                <span className='flex items-center gap-[10px] text-[15px] '><img src={location} className='w-[33px]' alt="" /> <a
                    href="https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8851151,75.6257479,11z/data=!3m1!4b1!4m6!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-500'
                >Jaipur, Rajasthan</a> </span>

                <span></span>
                <span></span>
            </div>


        </div>
    )
}

export default Footer