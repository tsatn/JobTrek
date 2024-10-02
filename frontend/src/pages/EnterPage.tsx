import React, { useState } from 'react';

export const EnterPage = () => {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Switch between login and signup
  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
    // Reset form fields when switching between login/signup
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log('Logging in with:', { username, password });
    } else {
      // Handle signup logic
      if (password !== confirmPassword) {
        console.log('Passwords do not match!');
      } else {
        console.log('Signing up with:', { username, password });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        {/* Tabs for switching between Login and Signup */}
        <div className="mb-6 flex justify-between">
          <button
            onClick={toggleLoginSignup}
            className={`flex-1 py-2 ${isLogin ? 'text-blue-600' : 'text-gray-600'} focus:outline-none`}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </div>

        {/* Form for login/signup */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Confirm password field for signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterPage;
