import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAgencySelect = (value) => {
    setForm({ ...form, isAgency: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, phone, email, password, company, isAgency } = form;
    if (name && phone && email && password && company && isAgency !== null) {
      alert('Signup successful! Please login.');
      navigate('/login');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] h-[667px] bg-white border border-gray-200 rounded-md shadow-md p-5 flex flex-col justify-between">
        
       
        <div className="flex flex-col justify-start" style={{ height: '60%' }}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Create your PopX account</h2>
          <form className="space-y-3 text-sm">
            <div>
              <label className="block text-violet-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-violet-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-violet-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-violet-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-violet-600 mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-violet-600 mb-1">Are you an agency?</label>
              <div className="flex gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => handleAgencySelect(true)}
                  className={`px-3 py-1 border rounded-md ${
                    form.isAgency === true
                      ? 'bg-violet-600 text-white border-violet-600'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleAgencySelect(false)}
                  className={`px-3 py-1 border rounded-md ${
                    form.isAgency === false
                      ? 'bg-violet-600 text-white border-violet-600'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </form>
        </div>

       
        <div className="pt-4">
          <button
            onClick={handleSignup}
            className="w-full py-2 bg-violet-600 text-white cursor-pointer text-sm font-semibold rounded-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
