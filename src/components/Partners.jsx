import urLogo from '../images/ur logo.png';
import nisrLogo from '../images/nisr.png';
import norskenLogo from '../images/GoOnlineTools-image-downloader.svg';

const partners = [
  {
    name: 'University of Rwanda',
    logo: urLogo,
    link: 'https://www.ur.ac.rw/'
  },
  {
    name: 'National Institute of Statistics of Rwanda (NISR)',
    logo: nisrLogo,
    link: 'https://statistics.gov.rw/'
  },
  {
    name: 'Norsken Kigali House',
    logo: norskenLogo,
    link: 'https://www.norsken.org/kigali'
  },
  {
    name: 'Rwanda ICT Chamber',
    logo: null,
    link: 'https://ictchamber.rw/'
  }
];

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

function Partners() {
  return (
    <section className="bg-graphite py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal">Community</p>
          <h2 className="text-3xl font-semibold">Partners and collaborators</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-card transition hover:border-teal/60 hover:bg-white/10"
            >
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-teal/40 bg-white/70 p-3 shadow-lg">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-white/80">
                      {getInitials(partner.name)}
                    </span>
                  )}
                </div>
              <div className="text-base font-semibold text-white group-hover:text-teal">
                {partner.name}
              </div>
              <span className="text-xs uppercase tracking-wide text-slate-300 group-hover:text-teal">
                Visit partner site
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

