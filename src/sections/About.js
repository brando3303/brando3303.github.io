import { SKILLS } from '../data';

export default function About({ aboutRef }) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen py-32 px-6 max-w-4xl mx-auto"
    >
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest">01 — about</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent mt-5" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Bio */}
        <div className="space-y-5 text-zinc-400 leading-relaxed">
          <p>
            I'm a software engineer and third-year CS student at the University of Washington's Paul Allen School, with a focus on distributed systems and networking. I have hands-on production experience building real-time collaborative platforms and high-performance network tools used by commercial clients.
          </p>
          <p>
            I love working on networking systems where correctness, reliability, and performance genuinely matter. Whether it's a Layer-3 VPN, a TCP congestion-control simulator, or a distributed consensus protocol, I care about understanding why things work and building them right.
          </p>
          <p>
            Outside of coding I enjoy hiking around the Pacific Northwest, playing the violin, and pickup basketball.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="mailto:bbailey9@uw.edu"
              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
            >
              Say hello →
            </a>
            <a
              href="/Brandon Bailey Resume 5.18.2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 text-sm font-medium transition-colors duration-200"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Skills + Education + Experience */}
        <div className="space-y-10">
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-sm font-mono hover:border-indigo-500/40 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Education
            </h3>
            <div className="border-l-2 border-indigo-500/30 pl-5 space-y-1.5">
              <p className="text-white font-semibold">University of Washington</p>
              <p className="text-zinc-400 text-sm">B.S. Computer Science, Math Minor · Sept 2023 – Dec 2026</p>
              <p className="text-zinc-600 text-sm font-mono">GPA: 3.91 · Paul Allen School of Computer Science</p>
              <p className="text-zinc-600 text-sm font-mono">Distributed Systems · Datacenters · DS &amp; Algorithms · Networking</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Experience
            </h3>
            <div className="space-y-5">
              <div className="border-l-2 border-zinc-700 pl-5 space-y-1">
                <p className="text-white font-medium">Software Engineer</p>
                <p className="text-zinc-500 text-sm">HyperRep, LLC · May 2025 – Present · Remote</p>
                <p className="text-zinc-400 text-sm">Built and shipped production features across frontend and backend using TypeScript (Next.js), Python, and SQL, supporting 100+ commercial clients. Designed real-time collaborative document editing using yjs conflict-free synchronization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
