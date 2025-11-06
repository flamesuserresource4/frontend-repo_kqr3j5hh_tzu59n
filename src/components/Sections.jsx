import { Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
        <p className="mt-6 text-zinc-300 max-w-3xl leading-relaxed">
          I’m Hanslay, majoring in web development and deeply passionate about digital business and creative technology. My work sits at the intersection of design, frontend engineering, and automation—crafting experiences that are fast, accessible, and scalable.
        </p>
      </div>
    </section>
  );
}

export function Projects() {
  const items = [
    {
      title: 'EventHub',
      desc: 'Event planning platform with booking and schedule management.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'LogiFlow',
      desc: 'Logistics and transportation dashboard for fleet tracking.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Digital Product Landing',
      desc: 'High-converting landing page for SaaS and info products.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'YouTube Automation',
      desc: 'Automated channel system for content scheduling and analytics.',
      img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Kit',
      desc: 'Editable portfolio template built with React and Tailwind.',
      img: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1280&auto=format&fit=crop',
    },
    {
      title: 'Startup Site',
      desc: 'Clean corporate website with CMS and blog integration.',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1280&auto=format&fit=crop',
    },
  ];
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <span className="text-xs text-zinc-400">4–6 selected works</span>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { name: 'Website Design', desc: 'Elegant, UX-focused designs tailored to your brand.' },
    { name: 'Frontend Development', desc: 'High-performance React builds with clean architecture.' },
    { name: 'Business Landing Pages', desc: 'Fast, SEO-friendly pages optimized for conversion.' },
    { name: 'Digital Automation', desc: 'Workflows and scripts that save time and scale operations.' },
  ];
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.08] transition-colors">
              <h3 className="text-white font-semibold">{s.name}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-zinc-300">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Message</label>
                <textarea required rows={5} className="mt-1 w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project"></textarea>
              </div>
              <button type="submit" className="rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-black px-6 py-3 font-semibold shadow hover:shadow-emerald-400/30 transition-shadow w-max">
                Send Message
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-4 text-zinc-300">
            <p>For inquiries, collaborations, or consultations, reach out via the form or email.</p>
            <a href="mailto:hanslay@example.com" className="text-blue-300 hover:text-blue-200 underline underline-offset-4">hanslay@example.com</a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center text-black font-bold">TH</div>
          <span className="text-zinc-400 text-sm">© {year} Toh Hanslay. All rights reserved.</span>
        </div>
        <div className="text-xs text-zinc-500">Built with React & Tailwind, optimized for speed and SEO.</div>
      </div>
    </footer>
  );
}
