import React,{useEffect,useContext} from 'react'
import '../Css/Appointments.css'
import itop from '/signin.png'
import vector from '/Vector.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import Context from '../Context/Context'
const Appointments = () => {
  const value=useContext(Context)
  console.log(value)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()


  const onSubmit = async (data) => {
    const ageRejex = /^([1-9][0-9]?|1[01][0-9]|120)$/

    if (ageRejex.test(data.age)) {
      let res = await axios.post('https://z-back-1.onrender.com/appointment', data, {
        withCredentials: true,
      })
      if (res.data.status) {
        toast.success(res.data.message);
        reset()
      } else {
        toast.error(res.data.message);
      }
    } else {
      toast.error("Invalid age");

    }
  }

  const resize=()=>{
    if(window.innerWidth<=501){
      let apphero=document.getElementById('sec1img');
      let base=document.querySelector('.sec1d1');
      let h = base.getBoundingClientRect().height
      console.log(h)
      apphero.style.marginTop=`${h + 150}px`
        }
  }

  window.addEventListener("resize",resize)

  useEffect(() => {
resize()
  },[])
  




  return (
    <div id='ahead' className={`pt-[150px] w-[100%] ${value.toggle?'mt-[50px]':''}`}>
      <ToastContainer />
      <div id='sec1' className='flex items-center w-[100%] justify-between px-[65px]'>
        <div className='w-[500px] sec1d1'>
          <h1 className='text-[35px] font-bold mb-[20px] leading-[55px]'>
            Schedule services <br />
            at your <span className='text-red-600 '>doorstep</span> | ZeeCare <br /> home
            Health Care Center
          </h1>
          <p className='text-gray-600 text-[15px]'>
            Our website offers a user-friendly platform for easy appointment scheduling, allowing you to book, reschedule, or cancel appointments at your convenience. With real-time availability and instant confirmation, managing your appointments has never been easier. Access your personalized care plan, view upcoming appointments, and receive timely reminders to stay on top of your health. Experience a streamlined process designed to fit your busy lifestyle.
          </p>
        </div>
        <div id='sec1img' className='w-[400px] mr-[50px]'>
          <img src={itop} id='apphero' className='relative z-20' alt="" />
        </div>
      </div>
      <div id='appform' className='px-[65px] mt-[150px]'>
        <h1 className='text-gray-500 font-bold text-[25px] mb-[10px]'>Book an Appoinment</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[100%] mt-[30px] flex flex-col gap-[20px]'>

          <div id='name' className='flex justify-between w-[100%]'>
            <input required {...register('firstname')} type="text" name='firstname' placeholder={`Patient's first name`} className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input ' />
            <input required {...register('lastname')} type="text" name='lastname' placeholder={`Patient's last name`} className='outline-none bg-white border border-gray-500 w-[45%] rounded-lg px-[20px] py-[5px] input ' />
          </div>
          <div id='dga' className='w-[100%] flex justify-between items-center'>
            <input required className='w-[45%] py-[6.6px] px-[14px] outline-none border border-gray-500 rounded-lg  desease' placeholder={`Patient's disease ( if nothing enter "none" )`} {...register('disease')} name="disease" id="disease" />

            <div id='ga' className='w-[45%]   flex justify-between items-center '>
              <select id='gender' required className='w-[49%] py-[6.6px] px-[10px] text-gray-500 outline-none border border-gray-500 rounded-lg' {...register('gender')} name="gender">
                <option value="">Patient's Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input id='age' required type="text" name='age' {...register('age')} placeholder={`Patient's age`} className='outline-none bg-white border border-gray-500 w-[45%]  rounded-lg px-[10px] py-[5px] age' />
            </div>
          </div>
          <textarea required placeholder={`Patient's address`} rows={4} className='w-full rounded-lg px-[20px] pt-[10px] border border-gray-500 ' name="address" id="address" {...register('address')} ></textarea>
          <p className='w-fit mx-auto text-red-600  text-[14px]'>
            <b className='text-gray-600'>For confirmation and other details</b> , our team will contact you within 10 mins after booking an appointment.
          </p>

          <input type="submit" value="Book" className='border px-[40px] rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-400  border-gray-600 font-bold w-fit mx-auto  py-[10px]' />
        </form>
      </div>
      {/* <img src={vector} id='itop' className='absolute right-[-30%] top-[-30%] z-10 rotate-[-90deg]' alt="" /> */}
      <Footer />
    </div>
  )
}

export default Appointments