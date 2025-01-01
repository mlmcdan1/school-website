import React, { useEffect, useState } from 'react';

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('');

  useEffect(() => {
    // Fetch the verse of the day from an API
    fetch('https://labs.bible.org/api/?passage=votd&type=json')
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0]) {
          setVerse(data[0].text);
          setReference(`${data[0].bookname} ${data[0].chapter}:${data[0].verse}`);
        }
      })
      .catch((error) => console.error('Error fetching verse:', error));
  }, []);

  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-r 
    from-green-800 to-green-950 text-white rounded-lg shadow-lg 
    mx-4 sm:mx-auto sm:max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
        
        {/* Left Section */}
        <div className="lg:col-span-2 flex justify-center items-center p-6">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <i className="fas fa-quote-right text-blue-500 text-4xl"></i>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3 text-center lg:text-left px-6">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Verse of the Day
          </h2>
          <p className="text-lg italic mb-4">
            "{verse || 'Loading verse...'}"
          </p>
          <p className="text-md font-semibold">{reference || ''}</p>
        </div>
      </div>
    </section>
  );
};

export default VerseOfTheDay;
