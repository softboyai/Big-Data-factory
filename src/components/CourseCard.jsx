import { GOOGLE_FORM_URL } from '../constants/forms.js';

function formatPrice(value) {
  if (value === undefined || value === null) {
    return null;
  }
  const formatted = new Intl.NumberFormat('en-RW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
  return `${formatted} RWF`;
}

function CourseCard({ course, onViewCourse }) {
  const handleRegister = () => {
    if (course.registrationLink) {
      window.open(course.registrationLink, '_blank');
      return;
    }
    window.open(`${GOOGLE_FORM_URL}${encodeURIComponent(course.name)}`, '_blank');
  };

  const priceLabel = formatPrice(course.price);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-card transition hover:-translate-y-1 hover:bg-white/10">
      <div className="text-xs font-semibold uppercase tracking-wide text-teal">{course.difficulty}</div>
      <h3 className="mt-3 text-xl font-semibold text-white">{course.name}</h3>
      <p className="mt-3 text-sm text-slate-100/80">{course.summary}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
        <span>{course.hours} hours</span>
        {priceLabel && <span className="font-semibold text-teal">{priceLabel}</span>}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-8">
        <button
          type="button"
          onClick={() => onViewCourse(course)}
          className="w-full rounded-md border border-teal px-4 py-2 text-sm font-semibold uppercase tracking-wide text-teal transition hover:bg-teal hover:text-navy"
        >
          View details
        </button>
        <button
          type="button"
          onClick={handleRegister}
          className="w-full rounded-md bg-teal px-4 py-2 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-navy hover:text-white"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

