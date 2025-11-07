import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/big-data-factory-logo.jpg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/courses', label: 'Register' }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Big Data Factory Merit logo"
            className="h-10 w-auto rounded-full border border-white/30 shadow"
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight">Big Data Factory</span>
            <span className="text-xs uppercase tracking-[0.3em] text-teal">Merit</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-teal ${isActive ? 'text-teal' : 'text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:+250785116487"
            className="rounded-full bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy shadow hover:bg-white"
          >
            Call: +250 785 116 487
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 text-sm">
            {navLinks.map((item) => (
              <NavLink
                key={item.to + item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-teal ${isActive ? 'bg-white/10 text-teal' : 'text-white'}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="tel:+250785116487"
              className="rounded-lg bg-teal px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-navy"
              onClick={() => setOpen(false)}
            >
              Call: +250 785 116 487
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

