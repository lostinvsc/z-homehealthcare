import React,{useEffect , useState , useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import Context from '../Context/Context';

const Login = () => {
    const value=useContext(Context)
    const [status, setStatus] = useState()
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm()
    const onSubmit = async (data) => {
   
            let res = await axios.post('https://z-back-1.onrender.com/clientLogin', data, {
                withCredentials: true,
            })
            let message = res.data.message ; 
            let status = res.data.status ; 
            setStatus(status)
            if(status){
                navigate('/')
                value.setCookie(Cookies.get("clientToken"))
            }else{
                toast.error(message)
            }
      
    }
    useEffect(() => {
   
    

    }, [status])
    
    return (
        <div className={`max-w-[400px] px-[10px] w-[100%] mx-auto mt-[100px] text-center border ${value.toggle?'mt-[150px]':''}`}>
            <ToastContainer />
            <h1 className='font-bold text-[23px]'>Sign In</h1>
            <p className='text-gray-500 text-[14px] my-[15px]'>Please Login to continue</p>
            <p className='text-gray-500 text-[14px]'>Discover new features, manage your preferences, and stay connected with our vibrant community of users today!</p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[100%] mt-[30px] flex flex-col '>
                <input required {...register('email')} type="email" name='email' placeholder='Email' className='outline-none bg-white border border-gray-500 w-full rounded-lg px-[20px] py-[5px] ' />
                <input required {...register('password')} type="password" name='password' placeholder='Password' className='outline-none bg-white border border-gray-500 w-full rounded-lg px-[20px] py-[5px] my-[20px]' />
                <div className='flex justify-end text-gray-500 text-[13px] mt-[5px] mb-[20px]'>
                    <p>Not Registered? &nbsp;</p>
                    <Link to='/signup' className='hover:text-blue-600'> Sign Up</Link>
                </div>
                <input type="submit" value="Sign In" className='border rounded-lg cursor-pointer bg-gradient-to-tr from-white via-black to-white text-white w-fit mx-auto px-[10px] py-[5px]' />
            </form>

        </div>
    )
}

export default Login