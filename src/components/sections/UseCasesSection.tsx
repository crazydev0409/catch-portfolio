"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const USE_CASES = [
  {
    title: "Human coordination",
    description:
      "Schedule with friends, family, and colleagues. See real availability, send requests, accept or reschedule — all in one place.",
    image: "/app-scheduling.png",
  },
  {
    title: "Business entities",
    description:
      "Salons, barbershops, therapists, advisors. Sync calendars, offer paid slots, block unavailable time, monetize availability directly.",
    image: "/slide-entities.png",
  },
  {
    title: "AI agent integration",
    description:
      "MCP server gives agents a standardized way to read and write the calendar. Machines know when to act. Humans stay in control.",
    image: "/slide-ai-agents.png",
  },
];

export function UseCasesSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Use cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8B949E]">
            From personal scheduling to time-based commerce to AI coordination.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid gap-12 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`relative aspect-video overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-xl font-semibold text-white">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-[#8B949E]">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
