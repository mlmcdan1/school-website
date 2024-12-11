import React from 'react'
import bible from '../../assets/videos/Bible.mp4'
function Home() {
  return (
    <main className='bg-white min-h-[600px]'>
      <div className='mx-auto relative sm:px-20 py-5'>
        {/* Hero Section */}
        
        {/* Background Video */}
        <div className='text-center w-full relative'>

          {/* Black Overlay */}
          <div className='absolute top-0 left-0 w-full h-[200px] sm:h-[calc(100%)] bg-black opacity-50'></div>

          {/* Video */}
          <video className='w-full h-[200px] sm:h-fit'
            autoPlay
            muted
            loop>
            <source src={bible}
            type='video/mp4'/>
          </video>

          {/* Text Content */}
          <div className='absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%]'>
            <h2 className='sm:text-4xl mb-4'>
              Welcome to Unity Christian Academy
            </h2>
            <h1 className='sm:text-[90px] sm:leading-[90px] font-bold'>
              Inspiring academic excellence and spiritual growth
            </h1>
          </div>
        </div>

        {/* About Section */}
        <section className='py-16 px-6'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            About Us
          </h2>
          <p className='text-center max-w-2xl mx-auto text-gray-700'>
            Unity Christian Academy's mission is to partner with Christian parents<br/>
            in the process of preparing their children to impact the world for Jesus Christ<br/>
            pursuing their God-given potential in academics, leadership, and service.
          </p>
        </section>

        {/* Academics */}
        <section className='bg-white py-16 px-6'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Academics
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            <div className='bg-gray-100 p-6 rounded shadow'>
              <h3 className='text-xl font-bold mb-2'>Elementary</h3>
              <p className='text-gray-700'>Building foundational skills and nurturing creativity.</p>
            </div>
            <div className='bg-gray-100 p-6 rounded shadow'>
              <h3 className='text-xl font-bold mb-2'>
                Middle School
              </h3>
              <p className='text-gray-700'>
                Encouraging critical thinking and academic exploration. 
              </p>
            </div>
            <div className='bg-gray-100 p-6 rounded shadow'>
              <h3 className='text-xl font-bold mb-2'>
                High School
              </h3>
              <p className='text-gray-700'>
                Preparing students for college and lifelong success. 
              </p>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section className='bg-green-900 text-white py-16 px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Donate</h2>
          <p className='text-lg mb-6'>
            Become a part of a community where faith and learning go hand in hand.
          </p>
          <div className='flex justify-center space-x-4'>
            <button className='bg-blue-600 text-white px-6 py-2 rounded
            hover:bg-blue-500'>
              Donate
            </button>
          </div>
        </section>
      </div>   
    </main>
  )
}

export default Home
