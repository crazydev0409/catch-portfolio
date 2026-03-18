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
      className="relative flex min-h-[700px] items-center justify-center py-20 pt-28 md:min-h-[750px]"
    >
      <Image
        src="/obsidian-hero.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center md:px-12">
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
          className="mt-6 max-w-2xl text-lg text-[#8B949E] md:text-xl"
        >
          Catch connects people, businesses, and autonomous systems into a
          shared timeline so actions happen at exactly the right moment.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex w-full max-w-sm flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="tel"
            placeholder="Phone Number (required)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="rounded-lg border border-[#30363D] bg-[#161B22] px-3 py-2.5 text-sm text-white placeholder:text-[#8B949E] focus:border-[#22C55E] focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
          />
          <input
            type="text"
            placeholder="How will you use Catch? (optional)"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="rounded-lg border border-[#30363D] bg-[#161B22] px-3 py-2.5 text-sm text-white placeholder:text-[#8B949E] focus:border-[#22C55E] focus:outline-none focus:ring-1 focus:ring-[#22C55E]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#22C55E] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Request Early Access
          </button>
          <p className="text-xs text-[#8B949E]">
            Join the future of coordination. No spam, ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
