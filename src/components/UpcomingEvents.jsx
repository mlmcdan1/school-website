import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../style/styles.css';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    // Fetch events from a JSON file or API
    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch('/events.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

    const settings = {
        infinite: true, // Ensure the carousel loops
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        dots: true, // Adds navigation dots
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // Adjust for mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div id="row_events" className="homepage_row bg-gray-100 py-8">
            <div className="homepage-row-inner max-w-7xl mx-auto">
                <section
                    className="content-container events1-container"
                    id="events_container"
                    aria-labelledby="events_header"
                >
                    <h2 className="text-3xl font-bold text-center mb-6 text-green-900" 
                        id="events_header">
                        <a className="hover:underline" href="/apps/events">
                            Upcoming Events
                        </a>
                    </h2>
                    <Slider {...settings}>
                        {events.map((event, index) => {
                            const eventDate = new Date(event.date);
                            const eventDay = eventDate.getDate();
                            const eventMonth = eventDate.toLocaleString('default', {
                                month: 'short',
                            });

                            return (
                                <article
                                    className="item bg-white border rounded-lg shadow-md mx-2 p-4"
                                    key={index}
                                    aria-label={event.title}
                                >
                                    <div className="event-date flex flex-col items-center bg-blue-100 p-2 rounded-md mb-4">
                                        <span className="event-month text-lg font-semibold test-blue-800">
                                            {eventMonth}
                                        </span>
                                        <span className="event-day text-2xl font-bold text-gray-800">
                                            {eventDay}
                                        </span>
                                    </div>
                                    <div className="item-summary text-center">
                                        <h3 className="item-name text-xl font-medium mb-2">
                                            <a 
                                                href={event.link}
                                                className='text-blue-600 hover:text-blue-800 transition-colors'
                                            >
                                                {event.title}
                                            </a>
                                        </h3>
                                    </div>
                                </article>
                            );
                        })}
                    </Slider>
                </section>
            </div>
        </div>
    );
};

export default UpcomingEvents;
