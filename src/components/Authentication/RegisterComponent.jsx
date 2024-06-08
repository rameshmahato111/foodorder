import axios from "axios";
import ButtonComponent from "../ButtonComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponent = ({ setShowRegister }) => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const validate = Yup.object({
    name: Yup.string().required().min(3).max(50),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(16).required("password is required"),
    cpassword: Yup.string()
      .required("password must be matched")
      .oneOf([Yup.ref("password"), null], "password does not matches"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        `https://api.spoonacular.com/users/connect?apiKey=009a0f8cbc19464d95f6102dc1bc74f8`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      if (response && response.data) {
        console.log(response.data);
        toast.success("Registration has been done successfully");
        formik.resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validate,
    onSubmit,
  });

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="py-5">
        <div className="max-w-[400px] mx-auto drop-shadow-lg bg-slate-800 rounded-lg">
          <h1 className="text-center capitalize text-2xl my-4 text-gray-200 py-2">
            Create your Account
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative px-4 font-poppins">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="FullName"
                onChange={formik.handleChange}
                className="peer w-full h-14 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent rounded-lg bg-gray-900"
              />
              <label htmlFor="name" className="form-float">
                FullName
              </label>
              <span className="text-red">{formik.errors?.name}</span>
            </div>

            <div className="relative mt-4 px-4 font-poppins">
              <input
                type="email"
                name="email"
                autoComplete="off"
                id="email"
                placeholder="Username or Email"
                onChange={formik.handleChange}
                className="peer w-full h-14 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent rounded-lg bg-gray-900"
              />
              <label htmlFor="email" className="form-float">
                Username or Email
              </label>
              <span className="text-red">{formik.errors?.email}</span>
            </div>

            <div className="relative mt-4 px-4 font-poppins">
              <input
                type="password"
                name="password"
                autoComplete="off"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                className="peer w-full h-14 px-1 focus:border-slate-300 focus:ring-slate-400 placeholder-transparent rounded-lg bg-gray-900"
              />
              <label htmlFor="password" className="form-float">
                Password
              </label>
              <span className="text-red">{formik.errors?.password}</span>
            </div>

            <div className="relative mt-4 px-4 font-poppins">
              <input
                type="password"
                name="cpassword"
                autoComplete="off"
                id="cpassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                className="peer w-full h-14 px-1 focus:border-slate-300 focus:ring-slate-400 focus:text-white placeholder-transparent rounded-lg bg-gray-900"
              />
              <label htmlFor="cpassword" className="form-float">
                Confirm Password
              </label>
              <span className="text-red">{formik.errors?.cpassword}</span>
            </div>
            <div className="text-center my-4 px-4">
              <ButtonComponent
                title={"Create Now"}
                type={"submit"}
                backgroundColor={"bg-blue-400"}
                textColor={"text-white"}
                btnSize={'w-full'}
              />
            </div>
          </form>
          <div className="flex items-center justify-center p-4 text-gray-200">
            Have an account?{" "}
            <span className='hover:underline decoration-blue-600 cursor-pointer' onClick={() => setShowRegister(false)}>Login</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
