import { FolderIcon, GitHubIcon, ExternalLinkIcon } from './Icons';

export default function ProjectCard({ title, description, github, live, tags }) {
  return (
    <div className="group p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-indigo-500/40 hover:bg-zinc-900/80 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <FolderIcon />
        <div className="flex gap-3 text-zinc-600">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-200" aria-label="View on GitHub">
              <GitHubIcon />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-200" aria-label="Open live site">
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-indigo-400/80">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
