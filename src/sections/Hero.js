export default function Hero({ scrollTo }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <p className="text-indigo-400 font-mono text-sm mb-5 tracking-widest uppercase">
        Hello, I'm
      </p>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
        <span className="text-white">Brandon</span>{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Bailey
        </span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10 flex flex-col">
        Software Engineer - University of Washington.{' '}
        <span className="text-zinc-500">Putting the work in networking</span>
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo('projects')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors duration-200 cursor-pointer"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo('about')}
          className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl font-medium transition-colors duration-200 cursor-pointer"
        >
          About Me
        </button>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
