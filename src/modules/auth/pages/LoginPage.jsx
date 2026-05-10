import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import photo from "../../../assets/Branding.png";
import Button from "../../../components/ui/Button/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const intialValues = { email: '', password: '' };

  const loginSchema = Yup.object({
    email: Yup.string().required("البريد الإلكتروني مطلوب").email("بريد إلكتروني غير صالح"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  const handleLogin = (values, { setSubmitting }) => {
    let data = { identifier: values.email, password: values.password };

    let domain = 'https://pos.skyready.online/api/';
    let endPoint = 'auth/local';
    let url = domain + endPoint;

    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem('token', res.data.jwt);
        navigate('/');
      })
      .catch(() => {
        toast.error('Wrong email or password');

      })
      .finally(() => {
        setSubmitting(false);
      });


    console.log(data);
  };
  // ---------------------------------------

  return (
    <div className="flex w-full h-dvh bg-white overflow-hidden font-sans items-center justify-center ">
      <div className=" w-full flex h-full  overflow-hidden">

        <div className="hidden lg:block w-1/2 h-full bg-white">
          <img className="w-full h-full " src={photo} alt="Clinic" />
        </div>


        <div className="flex w-full lg:w-1/2 h-full items-center justify-center  lg:px-20 bg-white">
          <div className="w-full max-w-md py-4">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Welcome back</h1>
              <p className="text-gray-500 text-lg">Please enter your credentials to access the system.</p>
            </div>

            <Formik onSubmit={handleLogin} initialValues={intialValues} validationSchema={loginSchema}>
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-base font-semibold text-gray-800 ml-1">
                      Email address
                    </label>
                    <div className="relative">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="dr.smith@smartclinic.com"
                        className={`w-full px-5 py-4 rounded-lg bg-[#F3F4F6] border-0 ring-1 transition-all focus:ring-2 focus:outline-none ${errors.email && touched.email
                          ? "ring-red-500 focus:ring-red-500"
                          : "ring-gray-300 focus:ring-[#00685F]"
                          } text-gray-700 placeholder-gray-400`}
                      />
                    </div>
                    <ErrorMessage name="email" className="text-red-500 text-xs font-medium ml-1" component={'p'} />
                  </div>


                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-base font-semibold text-gray-800 ml-1">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={`w-full px-5 py-4 rounded-lg bg-[#F3F4F6] border-0 ring-1 transition-all focus:ring-2 focus:outline-none ${errors.password && touched.password
                          ? "ring-red-500 focus:ring-red-500"
                          : "ring-gray-300 focus:ring-[#00685F]"
                          } text-gray-700 placeholder-gray-400`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      {errors.password && touched.password && (
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <ErrorMessage name="password" className="text-red-500 text-xs font-medium ml-1" component={'p'} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Field id="rememberMe" name="rememberMe" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#00685F] focus:ring-[#00685F]" />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-600 font-medium tracking-tight">Remember me</label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-[#008075] hover:text-[#00685F] transition-colors">Forgot Password?</a>
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg bg-[#00685F] hover:bg-[#005a52] text-white font-bold text-lg shadow-sm transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="text-center text-sm pt-4">
              <p className="text-gray-500 font-medium tracking-tight">
                New to the clinic network?{" "}
                <a href="#" className="font-semibold text-[#008075] hover:text-[#00685F] transition-colors">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
