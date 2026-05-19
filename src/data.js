export const NAV_TABS = ['about', 'projects'];

export const SKILLS = [
  'Go', 'C/C++', 'Java', 'TypeScript', 'Python',
  'Linux', 'TCP/IP', 'NFTables', 'NetLink',
  'Kubernetes', 'GCP', 'Cilium', 'TensorFlow',
  'NumPy', 'SQL', 'Next.js',
];

export const FEATURED_PROJECT = {
  title: 'NetSim + NewReno TCP',
  description:
    'Built a NewReno-TCP-like transport protocol and discrete-event network simulator in Python, implementing sliding-window flow control, adaptive retransmission timers, congestion control, and selective acknowledgments under deterministic and adversarial network conditions.',
  github: 'https://github.com/brando3303',
  live: null,
  tags: ['Python', 'Networking', 'TCP/IP', 'Distributed Systems'],
};

export const PROJECTS = [
  {
    title: 'Custom VPN System',
    description:
      'Built a secure Layer-3 VPN in Go with encrypted tunneling and packet forwarding, enabling reliable and high-performance network connectivity. Implemented a multi-threaded packet pipeline using water, netlink, and netfilter/iptables APIs, including a connection handshake to exchange encryption keys and manage client traffic securely.',
    github: 'https://github.com/brando3303',
    live: null,
    tags: ['Go', 'Networking', 'NFTables', 'NetLink', 'Encryption'],
  },
  {
    title: 'Paxos Implementation',
    description:
      'Implemented Multi-Paxos in Java, including leader election, log replication, failure handling, and consensus — ensuring safety and liveness across distributed nodes under loss, reordering, and simulated network faults.',
    github: 'https://github.com/brando3303',
    live: null,
    tags: ['Java', 'Distributed Systems', 'Consensus'],
  },
  {
    title: 'Software-Defined Networking Controller',
    description:
      'Developed an SDN controller in Python using POX to manage a Mininet virtual network, implementing custom routing, flow-rule installation, event-driven switch handling, and OpenFlow pipelines for packet forwarding and topology discovery.',
    github: 'https://github.com/brando3303',
    live: null,
    tags: ['Python', 'SDN', 'OpenFlow', 'Networking'],
  },
];
