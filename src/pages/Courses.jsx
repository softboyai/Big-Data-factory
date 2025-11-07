import { useState } from 'react';
import { courses } from '../data/courses.js';
import CourseCard from '../components/CourseCard.jsx';
import CourseModal from '../components/CourseModal.jsx';
import ContactSection from '../components/ContactSection.jsx';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <section className="bg-graphite py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-semibold">All Courses</h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            Choose from beginner to advanced programs in data analytics, business intelligence, Python, and machine learning. Each track blends practical labs, coaching, and assessments to show your new skills.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onViewCourse={setSelectedCourse} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
}

export default Courses;

