import axios from "axios";
import ButtonComponent from "../ButtonComponent"
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const RegisterComponent = () => {
  const navigate = useNavigate()
  const defaultValues = {
    name: '',
    email: "",
    password: '',
    cpassword: '',
  }
  const validate = Yup.object({
    name: Yup.string().required().min(3).max(50),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16)
      .required('password is required'),
    cpassword: Yup.string()
      .required('password must be matched')
      .oneOf([Yup.ref('password'), null], 'password does not matches'),
  })
  const onSubmit = async (values) => {
     console.log(values)
    try {

      const response = await axios.post(`https://api.spoonacular.com/users/connect?apiKey=009a0f8cbc19464d95f6102dc1bc74f8`, {
        method: "POST",
        headers: {
          accept: "application/json",
          'content-type': 'application/json'
        },
      })
      if (response && response.data) {
        console.log(response.data)
         toast.success('Registration has been done successfully')
         formik.resetForm();
         navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validate,
    onSubmit,

  })

  return (
    <>
        <ToastContainer theme="colored" position="top-center" />
      <div className='w-full h-screen px-5 bg-slate-300 py-10 my-5 dark:bg-black '>
        <h1 className='text-center font-navtitle text-3xl'>visit us today</h1>
        <div className='max-w-[400px] mx-auto drop-shadow-lg bg-white py-10'>
          <h1 className='text-center capitalize text-2xl my-4 font-navtitle text-red'>make a reserve</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='relative px-4 font-poppins'>
              <input type="text" name='name' id='name' autoComplete='off' placeholder='FullName'
                onChange={formik.handleChange}
                className='peer w-full h-12 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent ' />
              <label htmlFor="name"
                className='form-float'
              >FullName</label>
              <span className='text-red'>
                {formik.errors?.name}
              </span>
            </div>

            <div className='relative mt-4 px-4 font-poppins'>
              <input type="email" name='email' autoComplete='off' id='email' placeholder='Username or Email'
                onChange={formik.handleChange}
                className='peer w-full h-12 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent' />
              <label htmlFor="email"
                className='form-float'
              >Username or Email</label>
              <span className='text-red'>
                {formik.errors?.email}
              </span>
            </div>

            <div className='relative mt-4 px-4 font-poppins'>
              <input type="password" name='password' autoComplete='off' id='password' placeholder='Password'
                onChange={formik.handleChange}
                className='peer w-full h-12 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent' />
              <label htmlFor="password"
                className='form-float'
              >Password</label>
              <span className='text-red'>
                {formik.errors?.password}
              </span>
            </div>

            <div className='relative mt-4 px-4 font-poppins'>
              <input type="password" name='cpassword' autoComplete='off' id='cpassword' placeholder='Confirm Password'
                onChange={formik.handleChange}
                className='peer w-full h-12 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent' />
              <label htmlFor="cpassword"
                className='form-float'
              >Confirm Password</label>
              <span className='text-red'>
                {formik.errors?.cpassword}
              </span>
            </div>
            <div className='text-center my-4'>
              <ButtonComponent title={'Order Now'} type={'submit'} backgroundColor={'bg-gradient-to-r from-pink-500 to-yellow'} textColor={'text-white'} />
            </div>
          </form>
          <div>
            Have a account? <span><Link to='/login'>Login</Link></span>
          </div>
        </div>


      </div>


    </>
  )
}

export default RegisterComponent