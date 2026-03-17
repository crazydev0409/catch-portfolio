"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductPreviewSection() {
  return (
    <section id="preview" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Product preview
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8B949E]">
            Catch simplifies complex coordination into a single timeline
            interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22]">
            <Image
              src="/app-dashboard.png"
              alt="Timeline dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22]">
            <Image
              src="/app-scheduling.png"
              alt="Meeting request interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] md:col-span-2 lg:col-span-1">
            <Image
              src="/app-platform.png"
              alt="Availability graph"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-xl border border-[#30363D] bg-[#161B22] p-8"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-24 w-24 rounded-lg border border-[#30363D] bg-[#0B0F14] flex items-center justify-center">
              <span className="font-mono text-xs text-[#8B949E]">QR</span>
            </div>
            <span className="text-sm text-[#8B949E]">Apple App Store</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-24 w-24 rounded-lg border border-[#30363D] bg-[#0B0F14] flex items-center justify-center">
              <span className="font-mono text-xs text-[#8B949E]">QR</span>
            </div>
            <span className="text-sm text-[#8B949E]">Google Play</span>
          </div>
          <a
            href="#cta"
            className="rounded-lg border border-[#4F7CFF] px-6 py-3 text-[#4F7CFF] transition-colors hover:bg-[#4F7CFF]/10"
          >
            Download on the store
          </a>
        </motion.div>
      </div>
    </section>
  );
}
