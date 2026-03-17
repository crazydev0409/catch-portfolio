"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState("");

  return (
    <section
      id="hero"
      className="relative flex min-h-[700px] items-center py-20 pt-28 md:min-h-[750px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 md:px-12 lg:gap-24">
        <div className="flex w-full flex-col md:w-[45%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Time, figured out.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-[#8B949E] md:text-xl"
          >
            Catch connects people, businesses, and autonomous systems into a
            shared timeline so actions happen at exactly the right moment.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="tel"
              placeholder="Phone Number (required)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="rounded-lg border border-[#30363D] bg-[#161B22] px-4 py-3 text-white placeholder:text-[#8B949E] focus:border-[#4F7CFF] focus:outline-none focus:ring-1 focus:ring-[#4F7CFF]"
            />
            <input
              type="text"
              placeholder="How will you use Catch? (optional)"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="rounded-lg border border-[#30363D] bg-[#161B22] px-4 py-3 text-white placeholder:text-[#8B949E] focus:border-[#4F7CFF] focus:outline-none focus:ring-1 focus:ring-[#4F7CFF]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#4F7CFF] px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              Request Early Access
            </button>
            <p className="text-sm text-[#8B949E]">
              Join the future of coordination. No spam, ever.
            </p>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full items-center justify-center md:w-[55%]"
        >
          <div className="relative w-full max-w-lg rounded-xl border border-[#30363D] bg-[#161B22]/50 p-8">
            <div className="relative h-full min-h-[400px] w-full">
              <Image
                src="/obsidian.png"
                alt="Obsidian"
                fill
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#8B949E]">
              Humans · Businesses · AI Agents
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
