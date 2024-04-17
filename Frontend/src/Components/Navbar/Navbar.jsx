import React from 'react'

function Navbar() {

const navItems = (
    <>
       <li><a href='/'>Home</a></li>
      <li><a href='/Cour'> Courses</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
)

  return (
    <>
  <div>


  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
   
      </ul>
    </div>
    <a className=" text-2xl ml-[15%]">BookStore</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">     
     
     
   {navItems}
    </ul>
  </div>
  <div className='ml-[5%] '>
    <a href='/Login' className="btn text-white">Login</a>
  </div>
</div>
  </div>
    
    
    </>
  )
}

export default Navbar