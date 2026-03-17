"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: 1, type: "human", x: 20, y: 30, delay: 0 },
  { id: 2, type: "business", x: 50, y: 20, delay: 0.1 },
  { id: 3, type: "agent", x: 80, y: 35, delay: 0.2 },
  { id: 4, type: "human", x: 35, y: 60, delay: 0.15 },
  { id: 5, type: "business", x: 65, y: 55, delay: 0.25 },
];

export function TimelineGraph() {
  return (
    <div className="relative h-full min-h-[400px] w-full">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="nodeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#4F7CFF" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#4F7CFF" stopOpacity={0.3} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <motion.line
          x1="20"
          y1="30"
          x2="50"
          y2="20"
          stroke="#4F7CFF"
          strokeWidth="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.line
          x1="50"
          y1="20"
          x2="80"
          y2="35"
          stroke="#4F7CFF"
          strokeWidth="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.line
          x1="35"
          y1="60"
          x2="65"
          y2="55"
          stroke="#4F7CFF"
          strokeWidth="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {NODES.map((node) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: node.delay,
              type: "spring",
              stiffness: 200,
            }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.type === "business" ? 3 : 2.5}
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                delay: node.delay + 0.5,
                repeat: Infinity,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
