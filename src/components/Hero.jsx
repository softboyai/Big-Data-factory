import { Link } from 'react-router-dom';
import logo from '../images/big-data-factory-logo.jpg';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy via-graphite to-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-teal">Big Data Factory Merit</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Learn Big Data & AI Skills in Rwanda
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Gain job-ready training in big data engineering, machine learning, monitoring and evaluation, and business intelligence. Practical labs, certified mentors, and small cohorts in Kigali.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-white"
            >
              View Courses
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teal transition hover:bg-teal hover:text-navy"
            >
              Talk to Us
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-md overflow-hidden self-center md:self-auto">
          <div className="absolute -inset-10 rounded-full bg-teal/30 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-3xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <img
              src={logo}
              alt="Big Data Factory Merit emblem"
              loading="lazy"
              className="mx-auto h-28 w-auto rounded-xl border border-white/30 object-cover"
            />
            <p className="mt-6 text-sm font-medium uppercase tracking-wide text-teal">Program Highlights</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li>Certificate on completion</li>
              <li>Hands-on labs with local datasets</li>
              <li>Career coaching and project reviews</li>
              <li>Kigali-based cohorts with hybrid options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

