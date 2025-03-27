import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/page/Logo';
import InputField from '../components/page/InputField';
import SocialButton from '../components/page/SocialButton';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Authentication logic would go here
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Social login logic would go here
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Form Section (for Login) */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >

        <div className="flex justify-between">
          <Link to="/hero" className="flex mb-14">
            <img src="/pics/logo.png" alt="logo" className=" w-11 h-11 " />
          </Link>
          <p className="text-xs text-gray-600 mt-5">
          Not a member? <button onClick={handleRegisterClick}  className="text-red-800 hover:text-red-600 font-medium">Sign up!</button>
          </p>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Hi, Welcome Back!</h1>
          <p className="text-gray-600 text-xs">Start your day with us.</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 text-xs">
            <SocialButton provider="google" text="Sign Up with Google" icon="bx bxl-google" />
            <SocialButton provider="facebook" text="Sign Up with Facebook" icon="bx bxl-facebook" />
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">Or Sign in Email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          
          <form className="space-y-5 text-xs">
            <InputField type="email" label="Email Address" placeholder="Email Address" icon="bx bx-envelope" />
            <InputField type="password" label="Password" placeholder="Password" icon="bx bx-lock-alt" />

            <div className="flex justify-between text-xs -mt-5">
              <span></span>
              <a href="#" className="text-red-500">Forgot Password?</a>
            </div>

          </form>

          <Link to = "/explore">
          <button className="w-full bg-red-900 text-white text-xs font-medium rounded-full px-5 py-2 mt-3 transition-all hover:bg-red-800">
              Login
          </button>
          </Link>
        </div>
      </motion.div>

      {/* Right side - Image Section */}
      <motion.div 
        className="hidden md:flex w-1/2 relative bg-black rounded-l-3xl overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        
        <canvas className="absolute inset-0 w-full h-full" id="circle-canvas"></canvas>
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <img 
            src="/pics/statue.png" 
            alt="Greek statue" 
            className="object-contain max-h-[100%] max-w-[100%] animate-fade-in" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
