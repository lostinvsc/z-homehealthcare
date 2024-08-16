import React, { useState, useEffect, useContext } from 'react'
import hero from '/hero.png'
import vector from '/Vector.png'
import '../Css/Home.css'
import biography from '/about.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'
import Context from '../Context/Context'


const Home = () => {
    const value = useContext(Context)
    const [service, setService] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm()


    const onSubmit = async (data) => {
        const rejex = /^(?:\+91|91)?[-\s]?[6789]\d{9}$/;
        if (rejex.test(data.phone)) {
            let res = await axios.post('https://z-back-1.onrender.com/message', data, {
                withCredentials: true,
            })
            if (res.data.status) {
                toast.success(res.data.message);
                reset()
            } else {
                toast.error(res.data.message);
            }
        } else {
            toast.error('Invalid Phone Number');
        }

    }

    const getservice = async () => {
        let res = await axios.get('https://z-back-1.onrender.com/getservice', {
            withCredentials: true,
        })
        if (res.data.status) {
            setService(res.data.service)

        }
    }
    useEffect(() => {
        getservice()
    }, [])


    return (
        <div className={`pt-[100px] bg-gray-200 ${value.toggle ? 'mt-[80px]' : ''} `}>
            <ToastContainer />
            <div id='homeHead' className=' w-[100%]'>
                <div className='relative '>
                    <div id='hp1s1' className='w-[560px] pt-[100px] relative z-10'>
                        <h1 className=''>
                            Welcome to ZeeCare's <br /> Doorstep | Your
                            Trusted <span className='text-red-600'>Home</span> Healthcare
                            Provider
                        </h1>
                        <p className='font-light mt-[10px] text-[15px]'>
                            At ZeeCare, we are dedicated to transforming healthcare with personalized solutions designed for your unique needs. Our innovative approach combines expert care and a deep commitment to enhancing your well-being. Discover a new standard in healthcare where every detail is tailored to you. Join us in achieving better health, one step at a time.
                        </p>
                    </div>
                    <div className='images2'>
                        <img id='hero' src={hero} className='absolute right-[14vw] w-[300px] top-0 z-50 ' alt="" />
                        <img id='background' src={vector} className='absolute left-[55%] top-[-30%] w-[900px] -rotate-90' alt="" />
                    </div>

                    <div id='whoweare' className='flex  border-black mt-[200px] justify-around  items-center'>
                        <div id='biography' className='w-[34%]  border-black relative'>
                            <img src={biography} alt="" className='w-[200%]' />
                            
                        </div>
                        <div id='text' className='w-[50%]  border-black relative z-100 bg-gray-200'>
                            <h5 className='font-light text-[20px]'>Biography</h5>
                            <h1 className='my-[5px] text-[18px]'>
                                Who we are
                            </h1>
                            <p className='font-light text-[15px]'>
                                Here, we are a dedicated team of healthcare professionals and innovators committed to redefining the way you experience health and wellness. Our mission is to provide personalized, compassionate care that meets your unique needs. We believe in a holistic approach that combines expertise, empathy, and a deep understanding of individual health journeys. <br /> By focusing on you as a whole person, we aim to deliver tailored solutions that enhance your quality of life. Our team is driven by a shared passion for improving health outcomes and fostering a supportive environment where you can thrive. Join us in our commitment to delivering exceptional care and making a positive impact on your health every day.
                            </p>
                        </div>
                    </div>
                    <div id='movinganime' className='whitespace-nowrap text-[90px] font-bold my-[100px] text-gray-700'>
                        <ul className='inline-block '>
                            <li className='inline-block'> <span className='text-red-700'>!!</span> Available</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>in</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block text-red-700'>Jaipur</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>only</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                        </ul>
                        <ul className='inline-block '>
                            <li className='inline-block'> <span className='text-red-700'>!!</span> Available</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>in</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block text-red-700'>Jaipur</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>only</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                        </ul>
                        <ul className='inline-block '>
                            <li className='inline-block'> <span className='text-red-700'>!!</span> Available</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>in</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block text-red-700'>Jaipur</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                            <li className='inline-block'>only</li>
                            <li className='h-[40px] w-[40px] bg-gray-400 translate-y-[-5px] mx-[30px] rounded-full inline-block circle'></li>
                        </ul>
                    </div>
                    <div id='departments' className=''>
                        <h1 className='text-gray-500 font-bold text-[25px] mb-[10px]'>Benefits</h1>
                        <ul className='flex justify-between w-[100%] flex-wrap gap-y-[55px]'>
                            {
                                service.length > 0 &&
                                service.map((value, index) => {
                                    return (

                                        <li key={index} id='upcase' className='relative h-[200px] w-[22.93%] hover:scale-[1.05] transition-scale duration-500 cursor-pointer'>
                                            <img src={value.url} className='w-full h-full  object-cover rounded-lg' alt="" />
                                            <h2 className='absolute bottom-[10px] bg-white w-full text-center'>{value.name}</h2>
                                        </li>


                                    )
                                })
                            }

                        </ul>
                    </div>




                </div>
            </div>

            <div id='message' className='w-[100%] px-[60px] mt-[100px]'>
                <h1 className='w-fit mx-auto font-semibold text-[23px]'>Send us a message</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[100%] mt-[30px] flex flex-col gap-[20px]'>

                    <div className='flex justify-between w-[100%]'>
                        <input required {...register('firstname')} type="text" name='firstname' placeholder='First Name' className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input' />
                        <input required {...register('lastname')} type="text" name='lastname' placeholder='Last Name' className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input' />
                    </div>
                    <div className='flex justify-between w-[100%]'>
                        <input required {...register('email')} type="email" name='email' placeholder='Email' className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input' />

                        <input required {...register('phone')} type="text" name='phone' placeholder='Phone' className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input' />

                    </div>
                    <textarea required placeholder='Message' rows={4} className='w-full rounded-lg px-[20px] pt-[10px] border border-gray-500 ' name="message" id="message" {...register('message')} ></textarea>

                    <input type="submit" value="Send" className='border rounded-lg cursor-pointer bg-gradient-to-tr from-white via-blue-600 to-white text-white w-fit mx-auto px-[10px] py-[5px]' />
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Home