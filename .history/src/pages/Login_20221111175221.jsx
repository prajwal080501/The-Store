import React from 'react'

const Login = () => {
  return (
  //  create a login form
  <div className="flex justify-center items-center h-screen">
    <div className="w-1/3">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form className="mt-10">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="border-2 border-gray-300 p-2 rounded-md mt-2" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="border-2 border-gray-300 p-2 rounded-md mt-2" />
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="bg-red-400 text-white px-5 py-2 rounded-md">Login</button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Login