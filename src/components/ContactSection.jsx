function ContactSection() {
  return (
    <section id="contact" className="bg-graphite py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold">Ready to talk?</h2>
          <p className="mt-3 text-slate-200">
            Call or visit us at the Sonatube campus. Our advisors will help you choose the best track, schedule, and funding options for your learning plan.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-teal">Phone:</span> +250785116487
            </p>
            <p>
              <span className="font-semibold text-teal">Location:</span> Sonatube, Former UTB Campus, Kigali
            </p>
            <a
              href="mailto:info@bigdatafactorymerit.com"
              className="inline-flex items-center text-teal hover:text-white"
            >
              info@bigdatafactorymerit.com
            </a>
          </div>
        </div>
        <div className="h-80 overflow-hidden rounded-2xl border border-white/10 shadow-card">
          <iframe
            title="Big Data Factory Merit location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.335878050236!2d30.0985096!3d-1.9578752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7c5fc9b71ab%3A0x89e0d9e7403817f!2sSonatube!5e0!3m2!1sen!2srw!4v1697040000000!5m2!1sen!2srw"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

