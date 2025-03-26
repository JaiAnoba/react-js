import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import SocialButton from '../components/SocialButton';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // This creates the red circle programmatically
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set canvas dimensions to match the parent container
        const resizeCanvas = () => {
          const parent = canvas.parentElement;
          if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            
            // Draw the red circle
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(canvas.width, canvas.height) * 0.4;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = '#C10E0E';
            ctx.fill();
          }
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Registration logic would go here
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
    // Social registration logic would go here
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Image Section */}
      <motion.div 
        className="hidden md:flex w-1/2 relative bg-black rounded-r-3xl overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="absolute top-6 left-6 z-10 cursor-pointer">
          <Logo />
        </div>
        
        {/* <canvas ref={canvasRef} className="absolute flex justify-center inset-0 w-[85%] h-[85%]"></canvas> */}
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <img 
            src="/pics/statue.png" 
            alt="Greek statue" 
            className="object-contain max-h-[100%] max-w-[100%] animate-fade-in" 
          />
        </div>
      </motion.div>

      {/* Right side - Form Section (for Register) */}
      <motion.div 
      className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex justify-end mb-6">
        <p className="text-xs text-gray-600">
          Already a member? <button onClick={handleLoginClick} className="text-red-800 hover:text-red-600 font-medium">Log in!</button>
        </p>
      </div>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Create new account.</h1>
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
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField type="text" label="First Name" placeholder="First name" icon="bx bx-user" />
            <InputField type="text" label="Last Name" placeholder="Last name" icon="bx bx-user" />
          </div>
          
          <InputField type="email" label="Email Address" placeholder="Email Address" icon="bx bx-envelope" />
          <InputField type="password" label="Password" placeholder="Password" icon="bx bx-lock-alt" />

          <div className="flex justify-between text-xs -mt-5">
            <span></span>
            <a href="#" className="text-red-500">Forgot Password?</a>
          </div>
          
          <button className="w-full bg-red-900 text-white text-xs font-medium rounded-full px-5 py-2 transition-all hover:bg-red-800">
            Create account
          </button>
          
          <p className="text-xs text-center text-gray-500">
            By signing up, I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
          </p>
        </form>
      </div>
    </motion.div>
    </div>
  );
};

export default Register;