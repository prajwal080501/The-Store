import React from 'react'

const Login = () => {
  return (
  //  create a login form
  <div className="flex justify-center items-center h-screen">
    <div className="w-1/3 bg-gray-100 p-5 rounded-md drop-shadow-md">
    <h1 className="text-4xl text-center font-bold text-black pb-5">
            The <span className="text-3xl text-red-500 animate-pulse">Pj</span> Store
          </h1>
      <h1 className="text-3xl font-normal pt-3 text-center">Login</h1>
      
      <form className="mt-10">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="border-2 border-gray-300 p-2 rounded-md mt-2" />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="border-2 border-gray-300 p-2 rounded-md mt-2" />
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <button className=" text-white px-5 py-2 rounded-md">Login</button>
          {/* privacy terms */}
          <p className="text-sm w-full bg-red-100 text-gray-500 text-center mt-8">By continuing, you agree to The Pj Store's Terms of Use and Privacy Policy.</p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login