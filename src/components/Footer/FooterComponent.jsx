import React from 'react'
import { BiLogoFacebook } from "react-icons/bi"
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent'
const FooterComponent = () => {
    return (
        <>

            <div className='w-full bg-gray-300 grid lg:grid-cols-4 sm:grid-cols-2 px-10 py-8 gap-10 dark:bg-black dark:text-white '>

                <div className=''>
                    <h1 className='font-poppins sm:text-2xl'>Connect With Us</h1>

                    <div className='flex items-center gap-3 justify-between py-3'>

                        <a href="http://ww.facebook.com" className=' rounded-full shadow-lg shadow-gray-400 sm:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow'>

                            <BiLogoFacebook />

                        </a>

                        <a href='https://www.linkedin.com/in/ramesh-mahato-920164235' className='rounded-full shadow-lg shadow-gray-400 sm:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow'>
                            <FaLinkedinIn />
                        </a>

                        <a href='https://github.com/rameshmahato'

                            className='rounded-full shadow-lg shadow-gray-400 sm:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-600 dark:shadow'>
                            <FaGithub />
                        </a>

                        <a href="https://www.instagram.com" className='rounded-full shadow-lg shadow-gray-400 sm:p-6 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-gray-600 dark:shadow'>

                            <FaInstagram />

                        </a>

                    </div>


                </div>


                <div className='flex flex-col'>
                    <h1 className='font-poppins sm:text-2xl'>Opening Hours</h1>
                    {/* <Link to="/report-problem" className='font-poppins_extralight hover:underline decoration-black'>Report a Problem</Link>
                    <Link to='/privacy' className='font-poppins_extralight hover:underline decoration-black'>Privacy & Policies</Link>
                    <Link to='/feedback' className='font-poppins_extralight hover:underline decoration-black'>Feedback</Link> */}
                    <h1 className='flex items-center justify-between '>Mon-Tue  <span>09:00 am - 10:00 pm</span></h1>
                    <div className='border-4 border-gray-500' />
                    <h1 className='flex items-center justify-between '>Wed-Thur  <span>10:00 am - 11:00 pm</span></h1>
                    <div className='border-4 border-gray-500' />
                    <h1 className='flex items-center justify-between '>Sat<span>07:00 am - 8:00 pm</span></h1>
                    <div className='border-4 border-gray-500' />
                    <h1 className='flex items-center justify-between '>Sun <span>09:00 am - 8:00 pm</span></h1>
                    <div className='border-4 border-gray-500' />
                </div>

                <div className='flex flex-col'>

                    <h1 className='text-2xl font-poppins'>Keep Exploring</h1>
                    <Link to='/' className='font-poppins_extralight hover:underline decoration-black'>Home</Link>
                    <Link to='/menu' className='font-poppins_extralight hover:underline decoration-black'>Menu</Link>
                    <Link to='/' className='font-poppins_extralight hover:underline decoration-black'>Services</Link>
                    <Link to='/' className='font-poppins_extralight hover:underline decoration-black'>Reviews</Link>

                </div>


                <div className=''>
                    <h1 className='text-2xl font-poppins'>Subscribe to Get Free Delivery</h1>
                    <input type="email" name='email' id='email' className='w-full outline-none border  focus:ring-0 focus:border-gray-700 dark:text-black' />
                    <button className='font-poppins_extralight border rounded-md border-gray-500 px-5 py-3 mt-2 hover:bg-gray-600 hover:text-white'>Subscribe</button>


                </div>


            </div>
        </>
    )
}

export default FooterComponent