import felixImage from '../images/gasasira.JPG';
import jeanMarieImage from '../images/K.jpg';

const teamMembers = [
  {
    name: 'Felix Gasasira',
    title: 'Founder, CEO & Lead Mentor',
    bio: 'Drives Big Data Factory Merit vision, leads curriculum design, and mentors cohorts across analytics, AI, and industry partnerships.',
    image: felixImage
  },
  {
    name: 'Jean Marie Vianney Kamanzi',
    title: 'Web Developer & Product Lead',
    bio: 'Designs and maintains the Big Data Factory Merit digital experience, ensuring the platform scales for learners and partners.',
    image: jeanMarieImage
  }
];

function TeamSection() {
  return (
    <section id="team" className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal">Leadership</p>
          <h2 className="mt-3 text-3xl font-semibold">Meet Our Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Passionate mentors and builders guiding Rwanda’s next generation of data and AI professionals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-card backdrop-blur transition hover:border-teal/70 hover:bg-white/20"
            >
              <div className="h-40 w-40 overflow-hidden rounded-3xl border border-teal/60 bg-white/5 shadow-xl md:h-48 md:w-48">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm uppercase tracking-wide text-teal">{member.title}</p>
              <p className="mt-4 text-sm text-slate-200">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

