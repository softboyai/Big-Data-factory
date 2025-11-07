import urLogo from '../images/ur logo.png';
import nisrLogo from '../images/nisr.png';
import norskenLogo from '../images/GoOnlineTools-image-downloader.svg';

const partners = [
  {
    name: 'University of Rwanda',
    logo: urLogo,
    link: 'https://www.ur.ac.rw/',
    badgeClass: 'bg-[#0B3A65]'
  },
  {
    name: 'National Institute of Statistics of Rwanda (NISR)',
    logo: nisrLogo,
    link: 'https://statistics.gov.rw/',
    badgeClass: 'bg-[#0C4C6A]'
  },
  {
    name: 'Norsken Kigali House',
    logo: norskenLogo,
    link: 'https://www.norsken.org/kigali',
    badgeClass: 'bg-black'
  }
];

function Partners() {
  return (
    <section className="bg-graphite py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal">Community</p>
          <h2 className="text-3xl font-semibold">Partners and collaborators</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-card transition hover:border-teal/70 hover:bg-white/20"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/40 p-4 shadow-xl ${partner.badgeClass}`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
                </div>
              <div className="text-base font-semibold text-white group-hover:text-teal">
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

