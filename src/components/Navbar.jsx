import React from 'react';
import { Link } from 'react-router-dom';
import unityLogo from '../assets/images/unityLogo.png'
const Navbar = () => {
  return (
    <>
      <nav className='bg-white text-green-950 px-6 py-4 flex items-center justify-between'>
        <div className='text-2xl font-bold'>
          <Link to="/">
            {/* Insert Logo Here */}
            <img
            src={unityLogo}
            className='w-14 h-12'
            alt='Unity Christian Academy Logo'/>
            <p>
              Unity Christian Academy
            </p>
          </Link>
        </div>
        <ul className='flex space-x-4'>
          <li><Link to="/" className='hover:text-gray-300'>Home</Link></li>
          <li><Link to="/about" className='hover:text-gray-300'>About</Link></li>
          <li><Link to="/admissions" className='hover:text-gray-300'>Admissions</Link></li>
          <li><Link to="/academics" className='hover:text-gray-300'>Academics</Link></li>
          <li><Link to="/student-life" className='hover:text-gray-300'>Student Life</Link></li>
          <li><Link to="/contact" className='hover:text-gray-300'>Contact</Link></li>
          <li><Link to="/donate" className='hover:text-gray-300'>Donate</Link></li>
        </ul>
        <div className='flex space-x-2'>
          <Link to="/apply" className='bg-yellow-400 text-red-800 px-4 py-2 rounded hover:bg-yellow-300'>Apply Now</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
