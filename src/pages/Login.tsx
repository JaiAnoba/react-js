import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import SocialButton from '../components/SocialButton';

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
        <div className="md:hidden mb-6">
          <Logo textColor="text-black" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hi, Welcome Back!</h1>
          <p className="text-gray-600">Start your day with us.</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <SocialButton
              provider="google"
              onClick={() => handleSocialLogin('google')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign Up with Google
            </SocialButton>
            
            <SocialButton
              provider="facebook"
              onClick={() => handleSocialLogin('facebook')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign Up with Facebook
            </SocialButton>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or Sign in Email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
              <InputField
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <a href="#" className="text-sm text-gray-500 hover:text-brand-red">Forgot Password?</a>
              </div>
              <InputField
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Not a member? <button onClick={handleRegisterClick} className="text-brand-red hover:text-brand-darkRed font-medium">Sign up!</button>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right side - Image Section */}
      <motion.div 
        className="hidden md:flex w-1/2 relative bg-black overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="absolute top-6 right-6 z-10">
          <Logo />
        </div>
        
        <canvas className="absolute inset-0 w-full h-full" id="circle-canvas"></canvas>
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <img 
            src="/lovable-uploads/ca5e7f67-258a-4c70-8c74-a49f21d1cd23.png" 
            alt="Greek statue" 
            className="object-contain max-h-[90%] max-w-[90%] animate-fade-in" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
