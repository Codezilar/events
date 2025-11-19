import React from 'react'
import ExploreBtn from './components/ExploreBtn'
import EventsCard from './components/EventsCard'


const events = [
  {
    image: '/images/event1.png',
    title: 'Tech Conference 2024',
    slug: 'tech-conference-2024',
    location: 'San Francisco, CA',
    date: 'March 15-17, 2024',
    time: '9:00 AM - 5:00 PM',
  },
  {
    image: '/images/event2.png',
    title: 'Open Source Summit 2024',
    slug: 'open-source-summit-2024',
    location: 'Portland, OR',
    date: 'April 2-3, 2024',
    time: '10:00 AM - 6:00 PM',
  },
  {
    image: '/images/event3.png',
    title: 'Frontend Masters Meetup',
    slug: 'frontend-masters-meetup-2024',
    location: 'New York, NY',
    date: 'May 8, 2024',
    time: '6:30 PM - 9:00 PM',
  },
  {
    image: '/images/event4.png',
    title: 'AI & ML Expo 2024',
    slug: 'ai-ml-expo-2024',
    location: 'Seattle, WA',
    date: 'June 12-14, 2024',
    time: '9:00 AM - 5:00 PM',
  },
  {
    image: '/images/event5.png',
    title: 'Hack the North: Hackathon',
    slug: 'hack-the-north-2024',
    location: 'Toronto, ON',
    date: 'July 20-21, 2024',
    time: 'All day',
  },
  {
    image: '/images/event6.png',
    title: 'Startup Pitch Night',
    slug: 'startup-pitch-night-2024',
    location: 'Austin, TX',
    date: 'August 29, 2024',
    time: '7:00 PM - 10:00 PM',
  },
];
const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev <br /> Event you Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in one place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7"> 
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event) => (
            <li key={event.title} >
              <EventsCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page