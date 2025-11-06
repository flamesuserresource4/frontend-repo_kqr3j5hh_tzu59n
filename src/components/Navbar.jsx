import { useCallback, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center text-black font-extrabold tracking-wider shadow-lg">TH</div>
          <span className="text-sm sm:text-base text-zinc-300">Toh Hanslay</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll('contact')}
            className="ml-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 font-semibold shadow hover:shadow-yellow-500/30 transition-shadow"
          >
            Hire Me
          </button>
        </nav>

        <button
          className="md:hidden text-zinc-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left text-zinc-300 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('contact')}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 font-semibold shadow hover:shadow-yellow-500/30 transition-shadow"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
