import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     
      <div className="w-[375px] h-[667px] bg-white border border-gray-200 rounded-md shadow-md flex flex-col justify-between px-6 py-6">
        
       
        <div className="flex-1"></div>

       
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/signup')}
              className="w-full py-2 rounded-md bg-violet-600 text-white font-medium text-sm"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-2 rounded-md bg-white border border-gray-300 text-sm text-gray-800 font-medium"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
