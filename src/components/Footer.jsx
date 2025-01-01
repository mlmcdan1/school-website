import React from "react";
import unityLogo from "../assets/images/unityLogo.png"; // Replace with your logo path
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Operating Hours */}
        <div className='sm:col-span-2'>
          <Link
            to="/"
            aria-label='Go Home'
            title='Unity Christian Academy'
            className='inline-flex items-center'
          >
            <img
              src={unityLogo}
              alt='Unity Logo'
              className='w-12 h-12'
            />
            <span
              className='ml-2 text-xl font-bold tracking-wide text-green-800 uppercase'
            >
              Unity Christian Academy
            </span>
          </Link>
          <div className='mt-4 lg:max-w-sm'>
            <div className="text-sm text-gray-800 flex flex-col gap-1">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>8:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>8:00 AM - 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-green-800 hover:text-green-950"
            >
              (662) 702-3703
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@spartanschool.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-green-800 hover:text-green-950"
            >
              uca@unitychristianacademy.org
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-green-800 hover:text-green-950"
            >
              3015 E Reed Road
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">Social</p>
          <div className="flex items-center mt-1 space-x-3">
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-green-800">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,
                6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   
                C27,6.14,23.859,3,19.999,3z M15,21c-3.309,
                0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,
                9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,
                8.552,22.552,9,22,9z">
                </path>
              </svg>
            </a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-green-800">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,
                2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,
                0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,
                0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,
                2-2 V2C24,0.895,23.105,0,22,0z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
