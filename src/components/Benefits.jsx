const benefits = [
  {
    title: 'Certificate',
    description: 'Earn industry-recognized certificates mapped to Rwanda job standards.'
  },
  {
    title: 'Practical Labs',
    description: 'Solve business cases using Python, Power BI, and SQL with mentor reviews.'
  },
  {
    title: 'Small Cohorts',
    description: 'Stay in groups of 12 or fewer for coaching and feedback every week.'
  },
  {
    title: 'Kigali Campus',
    description: 'Attend onsite at Sonatube campus or join live online wherever you are.'
  }
];

function Benefits() {
  return (
    <section className="bg-graphite py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Why train with Big Data Factory?</h2>
        <p className="mt-4 max-w-2xl text-slate-200">
          Gain practical experience with experts guiding every step. Our programs focus on real projects, collaboration, and impact for Rwanda’s fast-growing digital economy.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur"
            >
              <div className="text-lg font-semibold text-teal">{benefit.title}</div>
              <p className="mt-3 text-sm text-slate-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;

