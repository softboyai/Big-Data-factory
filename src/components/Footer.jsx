function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Big Data Factory Merit</p>
          <p className="mt-1 text-sm text-slate-200">
            Sonatube, Former UTB Campus, Kigali • Phone: +250 785 116 487
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-200">
          <a href="tel:+250785116487" className="transition hover:text-teal">
            Phone: +250 785 116 487
          </a>
          <a href="mailto:info@bigdatafactorymerit.com" className="transition hover:text-teal">
            Email: info@bigdatafactorymerit.com
          </a>
          <a href="https://wa.me/250785116487" target="_blank" rel="noreferrer" className="transition hover:text-teal">
            WhatsApp: +250 785 116 487
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Big Data Factory Merit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

