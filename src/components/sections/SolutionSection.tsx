"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Connect Availability",
    description:
      "Catch aggregates availability across calendars and services to prevent conflicts and double bookings.",
  },
  {
    title: "Coordinate actions",
    description:
      "Users can schedule directly with friends, service providers, and entities with clear real-time availability.",
  },
  {
    title: "Execute reliably",
    description:
      "Catch resolves conflicts and predicts meeting outcomes. Instead of guessing when something might work, Catch determines when it actually will.",
  },
  {
    title: "Agent Integration",
    description:
      "AI agents interact with Catch through secure APIs.",
  },
  {
    title: "Monetized Time",
    description:
      "Verified users can turn specific calendar slots into paid opportunities. Creators, advisors, and service providers can offer bookable time directly from their timeline.",
  },
];

export function SolutionSection() {
  return (
    <section id="product" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            One shared timeline.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#8B949E]">
            Catch creates a unified availability graph across people,
            businesses, and systems. It connects existing calendars and
            scheduling sources to create a single source of truth for
            availability.
          </p>
        </motion.div>

        <p className="mt-12 text-center text-sm font-medium text-[#4F7CFF]">
          What Catch does — Designed for real-world coordination
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-[#30363D] bg-[#161B22] p-6"
            >
              <h3 className="font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm text-[#8B949E]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
