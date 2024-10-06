import React, { useState } from 'react';
//run: http://localhost:5173/auth/enter

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

  //mock functions for log in 
  const mocklogIn = (username: string, password: string) => {
    const admin = { username: 'admin', password: '000' };
    if (username === admin.username && password === admin.password) {
      return true; 
    }
    return false; // if Non-admin, mock rejection

  };
  console.log(mocklogIn(username, password));

  // //old log in component 
  // const loginComp = ({ handleSubmit }: { handleSubmit: (event: React.FormEvent) => void }) =>{
  //     <form onSubmit = {handleSubmit}>
  //       {/* Sign-in form with username and password */}
  //       <div className="mb-4">
  //           <label className="block text-sm font-medium text-gray-700">Username</label>
  //           <input
  //             type="text"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //             required
  //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
  //           />
  //         </div>

  //         <div className="mb-4">
  //           <label className="block text-sm font-medium text-gray-700">Password</label>
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
  //           />
  //         </div>

  //     </form>
  // };

  // Log in component
  const LoginComp = ({ handleSubmit }: { handleSubmit: (event: React.FormEvent) => void }) => (
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
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Log In
      </button>
    </form>
  );
  console.log(LoginComp({ handleSubmit }));



  // //sign up component 
  // const signupComp = ({handleSubmit}) => {
  //     <form onSubmit = {handleSubmit}>
  //       {/* Sign-up form with email, username, password, and confirm password */}
  //     </form>
  // };
  // console.log(signupComp({ handleSubmit }));


   // Sign-up component
   const SignupComp = ({ handleSubmit }: { handleSubmit: (event: React.FormEvent) => void }) => (
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
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Sign Up
      </button>
    </form>
  );
  console.log(SignupComp({ handleSubmit }));





  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <div className="mb-6 flex justify-between">
          <button
            onClick={toggleLoginSignup}
            className={`flex-1 py-2 ${isLogin ? 'text-blue-600' : 'text-gray-600'} focus:outline-none`}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </div>

        {/* Render either Login or Signup form based on state */}
        {isLogin ? <LoginComp handleSubmit={handleSubmit} /> : <SignupComp handleSubmit={handleSubmit} />}
      </div>
    </div> 
  );
};

{/* 
        Form for login/signup
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
          </div> */}

          {/* Confirm password field for signup
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
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </form> 
*/}


export default EnterPage;
