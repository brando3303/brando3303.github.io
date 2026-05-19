export default function TcpWriteup() {
  return (
    <section id="tcp-writeup" className="py-32 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest">03 — featured project: write-up</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">NetSim + NewReno TCP</h2>
        <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent mt-5" />
        <div className="flex flex-wrap gap-3 mt-6">
          {['Python', 'Networking', 'TCP/IP', 'Distributed Systems', 'Congestion Control'].map((tag) => (
            <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400/80">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-12 text-zinc-400 leading-relaxed">

        {/* Overview */}
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h3 className="text-white font-semibold text-xl mb-4">Overview</h3>
          <p>
            [Placeholder] This project involved building a complete transport-layer protocol and a discrete-event
            network simulator from scratch in Python. The goal was to deeply understand how TCP's congestion
            control mechanisms behave under real-world conditions like packet loss, reordering, and delay.
          </p>
        </div>

        {/* Two-column highlights */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-white font-semibold text-lg mb-3">Simulator Design</h3>
            <p className="text-sm">
              [Placeholder] Describe the event queue architecture, how time advances, and how network
              conditions (loss rate, delay, jitter) are configured and injected into the simulation.
            </p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-white font-semibold text-lg mb-3">NewReno Implementation</h3>
            <p className="text-sm">
              [Placeholder] Cover slow start, congestion avoidance, fast retransmit, fast recovery,
              partial ACKs, and how the cwnd and ssthresh evolve across the transfer.
            </p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-white font-semibold text-lg mb-3">Flow &amp; Congestion Control</h3>
            <p className="text-sm">
              [Placeholder] Explain the sliding-window flow control, how the receiver advertises
              its window, and how the sender balances both the congestion window and receive window.
            </p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-white font-semibold text-lg mb-3">Results &amp; Observations</h3>
            <p className="text-sm">
              [Placeholder] Share throughput graphs, cwnd traces, or any interesting behavior observed
              under adversarial conditions. What worked well? What surprised you?
            </p>
          </div>
        </div>

        {/* Deep dive */}
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h3 className="text-white font-semibold text-xl mb-4">Challenges &amp; Takeaways</h3>
          <p>
            [Placeholder] Walk through the hardest problems you hit — maybe timer management,
            handling duplicate ACKs correctly, or getting deterministic behavior out of the simulator.
            What would you do differently? What did building this teach you about TCP that reading
            the RFC never could?
          </p>
        </div>

      </div>
    </section>
  );
}
