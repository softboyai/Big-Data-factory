import { testimonials } from '../data/testimonials.js';

function Testimonials() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Success stories</h2>
        <p className="mt-2 max-w-xl text-slate-200">
          Graduates are leading analytics initiatives across finance, logistics, retail, and development projects across Rwanda.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <p className="text-sm text-slate-100/90">“{item.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-teal">{item.name}</div>
              <div className="text-xs uppercase tracking-wide text-slate-200">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

