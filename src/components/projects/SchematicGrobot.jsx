import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const SchematicGrobot = ({
  schematicNumber,
  schematicLabel,
  telemetryStream,
  status,
  port,
}) => {
  const [latency, setLatency] = useState(32);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(28 + Math.random() * 14));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aspect-square w-full border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard flex flex-col justify-between p-6 relative overflow-hidden transition-colors group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900 brutalist-card-shadow">
      {/* Schematic Header */}
      <div className="flex justify-between items-start font-mono text-[10px] text-ink/70 dark:text-neutral-400">
        <span className="font-bold text-cobalt dark:text-cobaltAccent">{schematicNumber}</span>
        <span className="font-semibold">{schematicLabel}</span>
      </div>

      {/* Interactive Telemetry Visualizer Engine */}
      <div className="flex flex-col items-center justify-center space-y-5 my-auto w-full relative">
        <div className="w-full max-w-[280px] flex items-center justify-between relative">
          {/* Animated Packet Stream Line */}
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-ink/40 dark:border-white/40 z-0" />

          {/* Animated Telemetry Pulse */}
          <motion.div
            animate={{ left: ['15%', '85%', '15%'] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-cobalt rounded-full shadow-[0_0_8px_#002BFF] z-10 pointer-events-none"
          />

          {/* RX Node */}
          <div
            onMouseEnter={() => setActiveNode('RX')}
            onMouseLeave={() => setActiveNode(null)}
            className={`w-12 h-12 border-2 border-ink dark:border-white flex flex-col items-center justify-center font-mono text-xs font-bold transition-all z-10 cursor-pointer ${
              activeNode === 'RX'
                ? 'bg-ink text-white dark:bg-white dark:text-black scale-105'
                : 'bg-white dark:bg-black text-ink dark:text-white group-hover:border-cobalt'
            }`}
          >
            <span>RX</span>
            <span className="text-[7px] font-normal opacity-75">IN_01</span>
          </div>

          {/* CORE Processing Node */}
          <div
            onMouseEnter={() => setActiveNode('CORE')}
            onMouseLeave={() => setActiveNode(null)}
            className={`w-16 h-16 border-2 border-cobalt flex flex-col items-center justify-center font-mono text-xs font-bold transition-all z-10 cursor-pointer ${
              activeNode === 'CORE'
                ? 'bg-cobalt text-white scale-110 shadow-[0_0_15px_rgba(0,43,255,0.4)]'
                : 'bg-cobalt/5 dark:bg-cobalt/20 text-cobalt dark:text-cobaltAccent group-hover:bg-cobalt group-hover:text-white'
            }`}
          >
            <span>CORE</span>
            <span className="text-[8px] font-mono font-normal">DSP</span>
          </div>

          {/* TX Node */}
          <div
            onMouseEnter={() => setActiveNode('TX')}
            onMouseLeave={() => setActiveNode(null)}
            className={`w-12 h-12 border-2 border-ink dark:border-white flex flex-col items-center justify-center font-mono text-xs font-bold transition-all z-10 cursor-pointer ${
              activeNode === 'TX'
                ? 'bg-ink text-white dark:bg-white dark:text-black scale-105'
                : 'bg-white dark:bg-black text-ink dark:text-white group-hover:border-cobalt'
            }`}
          >
            <span>TX</span>
            <span className="text-[7px] font-normal opacity-75">OUT_02</span>
          </div>
        </div>

        {/* Telemetry Stream & Dynamic Ping readout */}
        <div className="flex flex-col items-center gap-1">
          <div className="font-mono text-[11px] tracking-widest text-ink/90 dark:text-white text-center font-bold">
            {telemetryStream}
          </div>
          <div className="font-mono text-[9px] text-cobalt dark:text-cobaltAccent font-semibold tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            RTT: {latency}MS // LOSS: 0.00%
          </div>
        </div>
      </div>

      {/* Schematic Footer Status */}
      <div className="flex justify-between items-end font-mono text-[10px] text-ink/70 dark:text-neutral-400 border-t border-ink/20 dark:border-white/20 pt-2">
        <span className="font-semibold">{status}</span>
        <span className="font-bold text-cobalt dark:text-cobaltAccent">{port}</span>
      </div>
    </div>
  );
};
