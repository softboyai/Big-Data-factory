import { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Benefits from '../components/Benefits.jsx';
import FeaturedCourses from '../components/FeaturedCourses.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Partners from '../components/Partners.jsx';
import ContactSection from '../components/ContactSection.jsx';
import CourseModal from '../components/CourseModal.jsx';

function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedCourses onViewCourse={setSelectedCourse} />
      <Testimonials />
      <Partners />
      <ContactSection />
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
}

export default Home;

