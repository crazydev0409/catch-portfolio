"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function IntelligenceSection() {
  return (
    <section id="platform" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[#30363D] bg-[#161B22] p-8"
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Scheduling with intelligence.
            </h2>
            <p className="mt-6 text-[#8B949E]">
              Every event inside Catch receives a confidence score. This score
              predicts the likelihood that a meeting or scheduled action will
              occur successfully.
            </p>
            <p className="mt-6 font-medium text-white">
              Help users schedule outcomes, not just time slots.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8B949E]">Meeting</span>
                <span className="text-white">Coffee with Alex</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8B949E]">Suggested time</span>
                <span className="text-white">2:15 PM</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#30363D] pt-4">
                <span className="text-sm text-[#8B949E]">Confidence Score</span>
                <span className="text-2xl font-semibold text-[#22C55E]">92%</span>
              </div>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-black">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-full rounded-full bg-[#22C55E]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-xl bg-[#161B22]"
          >
            <Image
              src="/obsidian-card.png"
              alt="Catch platform"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
