import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] h-[667px] bg-white border border-gray-200 rounded-md shadow-md p-5">
       
        <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>

      
        <div className="flex items-center gap-4 mb-3">
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

       
        <p className="text-sm text-gray-600 leading-5 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis.
        </p>
      </div>
    </div>
  );
};

export default Profile;
