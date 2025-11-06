import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 min-h-[80vh] bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-3/5">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Web Developer • Digital Entrepreneur</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            I build modern, fast, and responsive websites
          </h1>
          <p className="mt-5 text-zinc-300 max-w-xl">
            Hi, I’m Toh Hanslay — I design and build premium web experiences for brands and creators. I blend clean UI, performance, and automation to help digital businesses grow.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 font-semibold shadow hover:shadow-yellow-500/30 transition-shadow">
              Hire Me
            </a>
            <a href="#projects" className="rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              View Projects
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1280&auto=format&fit=crop"
              alt="Toh Hanslay headshot"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
