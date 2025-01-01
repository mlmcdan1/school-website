import React from 'react';
import aboutUs  from '../assets/images/AboutUs.jpeg';
import PFT  from '../assets/images/PFT.jpeg';
import Resources  from '../assets/images/resources.jpeg';

const InfoSection = () => {
  return (
    <>
        <section className='py-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* About Us */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='relative'>
                            <img
                                src={aboutUs}
                                alt='About Us'
                                className='w-full h-48 object-cover'
                            />
                        </div>
                        <div className='p-4'>
                            <a
                                href='/'
                                className='text-lg font-semibold text-gray-800 hover:text-green-700 flex items-center'>
                                    About Us
                                <i className='fas fa-arrow-right text-sm ml-2'></i>
                            </a>
                        </div>
                    </div>

                    {/* PTF Zone */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='relative'>
                            <img
                                src={PFT}
                                alt='Parents and Teachers'
                                className='w-full h-48 object-cover'/>
                        </div>
                        <div className='p-4'>
                            <a href='/'
                            className='text-lg font-semibold text-gray-800 hover:text-green-700 flex items-center'>
                                PTF Zone
                                <i className='fas fa-arrow-right text-sm ml_2'></i>
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='relative'>
                            <img
                                src={Resources}
                                alt='School Resources'
                                className='w-full h-48 object-cover'
                            />
                        </div>
                        <div className='p-4'>
                            <a 
                                href='/'
                                className='text-lg font-semibold text-gray-800 hover:text-green-700 flex items-center'>
                                Resources
                                <i className='fas fa-arrow-right text-sm ml-2'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InfoSection
