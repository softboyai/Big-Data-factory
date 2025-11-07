import { createPortal } from 'react-dom';
import { GOOGLE_FORM_URL } from '../constants/forms.js';

function CourseModal({ course, onClose }) {
  if (!course) return null;

  const handleRegister = () => {
    window.open(`${GOOGLE_FORM_URL}${encodeURIComponent(course.name)}`, '_blank');
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-6">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 text-sm font-medium text-slate-500 hover:text-navy"
        >
          Close
        </button>
        <div className="text-xs font-semibold uppercase tracking-wide text-teal">
          {course.difficulty}
        </div>
        <h3 className="mt-2 text-3xl font-semibold text-navy">{course.name}</h3>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
          <span className="font-semibold text-navy">Duration: {course.hours} hours</span>
          <span>Investment: {new Intl.NumberFormat('en-RW').format(course.price)} RWF</span>
        </div>
        <p className="mt-6 text-slate-600">{course.description}</p>
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy">You will be able to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {course.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleRegister}
            className="w-full rounded-md bg-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white sm:w-auto"
          >
            Register now
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:border-navy sm:w-auto"
          >
            Keep browsing
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CourseModal;

