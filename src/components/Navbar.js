import { NAV_TABS } from '../data';

export default function Navbar({ activeTab, scrolled, scrollTo }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-light text-lg text-white hover:text-indigo-400 transition-colors duration-200 tracking-wider"
        >
          BCB
        </button>
        <div className="flex gap-1">
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollTo(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
