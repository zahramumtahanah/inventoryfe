import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
        setUsername(value);
    }   else if (id === 'password') {
        setPassword(value);
    }
}

const handleSubmit = (e) => {
  e.preventDefault();
  setUsername();
  setPassword();
      alert('Login successfull!')
      console.log('Login successful!') 
};

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <form onSubmit={handleSubmit} className='rounded-lg p-5 border shadow-md w-full max-w-sm bg-white gap-4'>
            <h1 className='text-3xl text-center font-serif font-bold'>Login Form</h1>
            <label htmlFor="username">Username</label>
            <input 
            type='text'
            id='username'
            placeholder='Username'
            value={username}
            onChange={handleChange}
            className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
            />
            <label htmlFor="password">Password</label>
            <input 
            type='text'
            id='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
            className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
            />
            <div>
                <button type='submit' className='w-full bg-blue-700 py-1 text-white font-semibold text-center border shadow-md rounded'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login