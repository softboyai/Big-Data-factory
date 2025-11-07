import { Link } from 'react-router-dom';
import { courses } from '../data/courses.js';
import CourseCard from './CourseCard.jsx';

function FeaturedCourses({ onViewCourse }) {
  const featured = courses.slice(0, 4);

  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Featured Programs</h2>
            <p className="mt-2 max-w-xl text-slate-200">
              Explore the most popular bootcamps chosen by analysts, engineers, and managers who want to move faster with data.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center rounded-md border border-teal px-4 py-2 text-sm font-semibold uppercase tracking-wide text-teal hover:bg-teal hover:text-navy"
          >
            See all courses
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} onViewCourse={onViewCourse} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;

