import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import { ButtonComponent } from "../Components";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo/Screenshot_2024-06-08_at_11.56.24_AM-removebg-preview.png";

const LoginComponent = ({ setShowRegister }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      toast.warning('Credentials are required');
      return;
    }

    try {
      const result = await fetch(`api here`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      });
      const res = await result.json();

      if (res.success) {
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('You are successfully logged in');
        navigate('/');
      } else {
        toast.error('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Login failed. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <div className='max-w-md h-[500px] mx-auto drop-shadow-lg bg-gray-800 rounded-2xl'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center justify-center'>
            <img src={logo} alt="logo" className='w-28'/>
          </div>
          <h1 className='text-center font-poppins text-white'>Login Here</h1>
          <div className='relative px-3 mt-3'>
            <FaUser className='text-gray-400 text-2xl absolute top-4 pl-2' />
            <input type='email' name='username' id='username' autoComplete='off'
              placeholder='Email'
              className='peer w-full h-14 bg-gray-900 focus:ring-0 focus:outline-none focus:border-gray-400 rounded-lg pl-8 text-white placeholder-transparent'
              value={user.username}
              onChange={handleChange}
            />
            <label htmlFor="username" className='login-float'>Email</label>
          </div>
          <div className='relative px-3 mt-3'>
            <RiLockPasswordFill className='text-gray-400 text-2xl absolute top-4 pl-2' />
            <input type='password' name='password' id='password' autoComplete='off'
              placeholder='Password'
              className='peer w-full h-14 bg-gray-900 focus:ring-0 focus:outline-none focus:border-gray-400 rounded-lg pl-8 text-white placeholder-transparent'
              value={user.password}
              onChange={handleChange}
            />
            <label htmlFor="password" className='login-float'>Password</label>
          </div>
          <div className='text-end text-white px-3 py-2'>
            <Link to={'/forgetpassword'} className='hover:underline decoration-gray-400'>Forget password?</Link>
          </div>
          <div className='mt-4 text-center px-3'>
            <Link to={'/user-order'}>
              <ButtonComponent title={'Log In'} btnSize={'w-full'} backgroundColor={'bg-blue-500'} textColor={'text-white'} hover={'hover:bg-blue-700'} />
            </Link>
          </div>
          <div className='text-white px-3 mt-3 font-poppins sm:font-bold'>
            <h1>Don't have an account? <span className='hover:underline decoration-blue-600 cursor-pointer' onClick={() => setShowRegister(true)}>Signup</span></h1>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
