import React, { useState,useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Css/signup.css'
import down from '/down.svg'
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import Cookies from 'js-cookie'
const Signup = () => {
  let navigate=useNavigate()
  const [data, setData] = useState({})
  const [code, setCode] = useState(0)
  const [inputCode, setInputCode] = useState(0)
  const [toggle, setToggle] = useState(false)
  let value=useContext(Context)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = async (data) => {
    const rejex = /^(?:\+91|91)?[-\s]?[6789]\d{9}$/;
    if (rejex.test(data.phone)) {
      if (data.password == data.confirmpassword) {
        if (data.password.length < 6) {
          toast.error('Password must contain atleast 6 characters')
        } else {
          let res = await axios.post('https://z-care.onrender.com/getcode', data, {
            withCredentials: true,
          })

          let message = res.data.message;
          let status = res.data.status;
          if (status) {
            toast.success(message)
            setData(data)
            setCode(res.data.code);
            setToggle(true)
          } else {
            toast.error(message)
          }
        }
      } else {
        toast.error("Password and confirm password didn't match")
      }
    } else {
      toast.error('Invalid Phone Number');
    }
  }

  const verify = async () => {
    if (parseInt(code) == parseInt(inputCode)) {
      let res = await axios.post('https://z-care.onrender.com/clientSignup', data, {
        withCredentials: true,
      })
      let status = res.data.status;
      let message = res.data.message;

      if (status) {
        toast.success(message)
        navigate('/')
        value.setCookie(Cookies.get("clientToken"))
      } else {
        toast.error(message)
      }
    } else {
      toast.error("Invalid code")
    }
  }
  if(window.innerWidth<566){
let dob=document.getElementById('dob').innerText='DOB'
  }
  return (
    <>

      {
        !toggle ?

          <div id='msignup' className={`mx-auto ${value.toggle?'mt-[180px]':' mt-[140px]'}`} >
            <h1 className='font-bold text-[23px]'>Sign Up</h1>
            <p className='text-gray-500 text-[14px] my-[15px]'>Please Sign Up to continue</p>
            <p className='text-gray-500 text-[14px]'>By signing up below, you confirm that the information provided is accurate and complete to the best of your knowledge.</p>
            <form id='sform' onSubmit={handleSubmit(onSubmit)} className='w-[100%] mt-[30px] flex flex-col gap-[20px]'>

              <div id='sd1' className='flex justify-between w-[100%]'>
                <input required {...register('firstname')} type="text" name='firstname' placeholder='First Name' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px]' />
                <input required {...register('lastname')} type="text" name='lastname' placeholder='Last Name' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px]' />
              </div>
              <div id='sd2' className='flex justify-between w-[100%]'>
                <input required {...register('email')} type="email" name='email' placeholder='Email' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px]' />
                <input required {...register('phone')} type="text" name='phone' placeholder='Phone' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px]' />
              </div>
              <div id='sd3' className='flex justify-between w-[100%]'>
                <select required className='w-[49%] px-[10px] text-gray-500 outline-none border border-gray-500 rounded-lg' {...register('gender')} name="gender" id="gender">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className='w-[49%]  bg-white outline-none  border border-gray-500 rounded-lg px-[20px] py-[5px] flex justify-between items-center text-gray-500'>
                  <p id='dob'> Date of birth</p>
                  <input required type="date" {...register('date')} name='date' className='border border-black rounded-lg px-[5px]' />
                </div>
              </div>
              <div id='sd4' className='flex justify-between w-[100%]'>
                <input required {...register('password')} type="password" name='password' placeholder='Password' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px]' />
                <input required {...register('confirmpassword')} type="password" name='confirmpassword' placeholder='Confirm Password' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[20px] py-[5px] ' />
              </div>


              <div className='flex justify-end text-gray-500 text-[13px] '>
                <p>Already have an account? &nbsp;</p>
                <Link to='/login' className='hover:text-blue-600'>Login</Link>
              </div>
              <input type="submit" value="Register" className='border rounded-lg cursor-pointer bg-gradient-to-tr from-white via-black to-white text-white w-fit mx-auto px-[10px] py-[5px]' />
            </form>
          </div>
          :
          <div className='w-fit mx-auto mt-[140px]  flex flex-col items-center gap-[10px] border border-black px-[20px] py-[20px] rounded-lg'>
            <input placeholder='Enter code' required onChange={(e) => { setInputCode(e.target.value) }} type="text" name='code' id='code' className='outline-none bg-white border border-gray-500 w-[49%] rounded-lg px-[10px] py-[5px]' />
            <div className='flex items-center w-fit gap-[20px] '>
              <button onClick={() => { verify() }} className='border border-black rounded-lg hover:bg-black hover:text-white px-[10px] py-[3px] cursor-pointer'>Verify</button>
              <button onClick={() => { setToggle(false) }} className='border border-black rounded-lg hover:bg-black hover:text-white px-[10px] py-[3px] cursor-pointer'>cancel</button>
            </div>
          </div>
      }
<ToastContainer/>
    </>
  )
}

export default Signup