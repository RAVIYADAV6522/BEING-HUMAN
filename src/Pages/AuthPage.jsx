import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [role, setRole] = useState('User');
  const navigate = useNavigate(); // for navigation

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate an authentication process
    console.log('Sign-up/Sign-in as:', role);

    // After authentication, redirect to the home page
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              id="role"
              className="mt-1 p-2 w-full border rounded-md"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="User">User</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
           
            onClick={toggleAuthMode}
            className="text-blue-500 hover:underline "
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : 'Don’t have an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
