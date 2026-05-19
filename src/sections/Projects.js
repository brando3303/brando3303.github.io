import { FEATURED_PROJECT, PROJECTS } from '../data';
import ProjectCard from '../components/ProjectCard';
import { GitHubIcon, ExternalLinkIcon } from '../components/Icons';

export default function Projects({ projectsRef, scrollTo }) {
  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen py-32 px-6 max-w-4xl mx-auto"
    >
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest">02 — projects</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
        <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent mt-5" />
      </div>

      {/* Featured */}
      <div className="mb-6 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-indigo-500/40 transition-all duration-300 group">
        <p className="text-indigo-400 font-mono text-xs mb-3 tracking-widest">Featured Project</p>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-bold text-2xl group-hover:text-indigo-400 transition-colors duration-200">
            {FEATURED_PROJECT.title}
          </h3>
          <div className="flex gap-3 text-zinc-600">
            {FEATURED_PROJECT.github && (
              <a href={FEATURED_PROJECT.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-200" aria-label="View on GitHub">
                <GitHubIcon />
              </a>
            )}
            {FEATURED_PROJECT.live && (
              <a href={FEATURED_PROJECT.live} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-200" aria-label="Open live site">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="text-zinc-400 leading-relaxed mb-5 max-w-2xl">
          {FEATURED_PROJECT.description}
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {FEATURED_PROJECT.tags.map((tag) => (
              <span key={tag} className="text-sm font-mono text-indigo-400/80">{tag}</span>
            ))}
          </div>
          <button
            onClick={() => scrollTo('tcp-writeup')}
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
          >
            Read write-up
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/brando3303"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          View more on GitHub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
