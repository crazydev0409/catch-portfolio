"use client";

import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-white md:text-4xl"
          >
            Time is broken.
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 space-y-4 text-[#8B949E]"
          >
            <p className="italic">
              &ldquo;Every day, people spend hours trying to coordinate schedules
              across calendars, messages, and booking tools.&rdquo;
            </p>
            <p className="italic">
              &ldquo;Businesses lose revenue from missed appointments and
              inefficient scheduling.&rdquo;
            </p>
            <p className="italic">
              &ldquo;AI systems can automate tasks, but they still cannot coordinate
              real-world timing between people, services, and systems.&rdquo;
            </p>
            <p className="italic">
              &ldquo;Time is the most valuable resource we have — yet it remains one
              of the least structured.&rdquo;
            </p>
          </motion.blockquote>
        </div>

        {/* Why Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl border border-[#30363D] bg-[#161B22] p-8 md:p-12"
        >
          <h3 className="text-xl font-semibold text-white">
            Why now — Three shifts making coordination infrastructure inevitable
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-medium text-[#22C55E]">
                AI agents are beginning to act in the real world.
              </h4>
              <p className="mt-2 text-sm text-[#8B949E]">
                But they still lack a shared timeline to coordinate with people
                and systems.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#22C55E]">
                The economy is increasingly time-based.
              </h4>
              <p className="mt-2 text-sm text-[#8B949E]">
                Services, teams, and automation all depend on precise
                scheduling.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-[#22C55E]">
                Yet coordination tools remain fragmented.
              </h4>
              <p className="mt-2 text-sm text-[#8B949E]">
                Calendars, booking systems, and messaging platforms still
                operate in isolation.
              </p>
            </div>
          </div>
          <p className="mt-8 text-lg font-medium text-white">
            The world doesn&apos;t need another calendar. It needs a
            coordination layer.
          </p>
          <p className="mt-2 text-[#8B949E]">
            Catch provides the shared timeline where people, businesses, and
            intelligent systems align time and action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
