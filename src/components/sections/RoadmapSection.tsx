"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    phase: "Phase 1",
    title: "Human & business coordination",
    status: "Live now",
    description:
      "Real availability, request/accept/decline flows, context selection. Calendar unification across Google, Outlook, Square.",
  },
  {
    phase: "Phase 2",
    title: "MCP server & AI agents",
    status: "Next 6 months",
    description:
      "AI agents as first-class entities. Secure API access, availability queries, action proposals. Coordination becomes automatic.",
  },
  {
    phase: "Phase 3",
    title: "Active infrastructure",
    status: "12 months",
    description:
      "Catch becomes the default time layer. Network effects lock in. Humans, businesses, and machines aligned on one timeline.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8B949E]">
            Execution is clear. Chapter one complete. AI agents next.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PHASES.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-[#30363D] bg-[#161B22] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-[#4F7CFF]">
                  {item.phase}
                </span>
                <span className="rounded-full bg-[#4F7CFF]/20 px-3 py-1 text-xs font-medium text-[#4F7CFF]">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-[#8B949E]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
