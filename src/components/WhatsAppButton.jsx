const whatsappNumber = '250785116487';
const whatsappMessage = 'Hello Big Data Factory, I would like to learn more about your courses.';

function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold uppercase tracking-wide text-navy shadow-2xl transition hover:scale-105 hover:bg-white"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="h-2 w-2 rounded-full bg-navy" aria-hidden="true" />
      WhatsApp
    </button>
  );
}

export default WhatsAppButton;

