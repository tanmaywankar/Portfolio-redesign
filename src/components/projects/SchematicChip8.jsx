import React, { useState, useEffect } from 'react';

const OPCODES = [
  'OPCODE: 0x00E0 CLS',
  'OPCODE: 0x1200 JP 200',
  'OPCODE: 0x6A02 LD V0, 2',
  'OPCODE: 0xD014 DRW V0, V1',
  'OPCODE: 0x7A01 ADD V0, 1',
];

export const SchematicChip8 = ({
  schematicNumber,
  schematicLabel,
  telemetryStream,
  clock,
}) => {
  const [opcodeIndex, setOpcodeIndex] = useState(0);
  const [pixels, setPixels] = useState([
    1, 0, 1, 1, 0, 1, 1, 0,
    0, 1, 1, 0, 1, 0, 0, 1,
    2, 2, 0, 1, 0, 2, 2, 1,
    0, 2, 2, 1, 1, 0, 1, 0,
  ]);

  useEffect(() => {
    const opcodeTimer = setInterval(() => {
      setOpcodeIndex((prev) => (prev + 1) % OPCODES.length);
      setPixels((prev) => {
        const next = [...prev];
        const randomIdx = Math.floor(Math.random() * next.length);
        next[randomIdx] = (next[randomIdx] + 1) % 3;
        return next;
      });
    }, 1200);

    return () => clearInterval(opcodeTimer);
  }, []);

  return (
    <div className="aspect-square w-full border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard flex flex-col justify-between p-6 relative overflow-hidden transition-colors group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900 brutalist-card-shadow">
      {/* Schematic Header */}
      <div className="flex justify-between items-start font-mono text-[10px] text-ink/70 dark:text-neutral-400">
        <span className="font-bold text-cobalt dark:text-cobaltAccent">{schematicNumber}</span>
        <span className="font-semibold">{schematicLabel}</span>
      </div>

      {/* CHIP-8 Matrix Pixel Representation */}
      <div className="flex flex-col items-center justify-center my-auto w-full">
        <div className="grid grid-cols-8 gap-1.5 p-3.5 border-2 border-ink dark:border-white bg-neutral-100 dark:bg-neutral-900 max-w-[240px] w-full shadow-inner">
          {pixels.map((pixelState, idx) => (
            <span
              key={idx}
              className={`h-4 transition-colors duration-150 ${
                pixelState === 1
                  ? 'bg-ink dark:bg-white'
                  : pixelState === 2
                  ? 'bg-cobalt shadow-[0_0_6px_#002BFF]'
                  : 'bg-white dark:bg-black border border-ink/40 dark:border-white/40'
              }`}
            />
          ))}
        </div>

        <p className="font-mono text-[11px] mt-3 tracking-widest text-ink dark:text-white font-bold text-center">
          {telemetryStream}
        </p>
      </div>

      {/* Schematic Footer */}
      <div className="flex justify-between items-end font-mono text-[10px] text-ink/70 dark:text-neutral-400 border-t border-ink/20 dark:border-white/20 pt-2">
        <span className="font-mono font-bold text-ink dark:text-white">
          {OPCODES[opcodeIndex]}
        </span>
        <span className="font-bold text-cobalt dark:text-cobaltAccent">{clock}</span>
      </div>
    </div>
  );
};
