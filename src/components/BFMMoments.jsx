import gas1 from '../images/gas1.jpeg';
import gas2 from '../images/gas2.jpeg';
import gas3 from '../images/gas3.jpeg';
import gas4 from '../images/gas4.jpeg';

const moments = [
  { id: 1, image: gas1, alt: 'BFM training session moment' },
  { id: 2, image: gas2, alt: 'BFM workshop activity' },
  { id: 3, image: gas3, alt: 'BFM cohort learning' },
  { id: 4, image: gas4, alt: 'BFM community engagement' }
];

function BFMMoments() {
  return (
    <section className="bg-graphite py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold">BFM Moments</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Capturing the energy, collaboration, and growth from our training sessions, workshops, and community events across Rwanda.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((moment) => (
            <div
              key={moment.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card transition hover:border-teal/60 hover:bg-white/10"
            >
              <img
                src={moment.image}
                alt={moment.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BFMMoments;

