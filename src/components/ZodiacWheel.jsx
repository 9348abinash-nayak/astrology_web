import React from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { name: 'Aries', path: 'M7 14C7 11 9 9 12 9C15 9 17 11 17 14C17 17 15 19 12 19V22M12 9V5' },
  { name: 'Taurus', path: 'M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM12 8C12 4 10 2 8 2M12 8C12 4 14 2 16 2' },
  { name: 'Gemini', path: 'M8 4V20M16 4V20M4 4H20M4 20H20' },
  { name: 'Cancer', path: 'M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM16 12C19 12 21 10 21 7C21 4 19 2 16 2C13 2 11 4 11 7M8 12C5 12 3 14 3 17C3 20 5 22 8 22C11 22 13 20 13 17' },
  { name: 'Leo', path: 'M6 16C6 13 8 11 11 11C14 11 16 13 16 16C16 19 14 21 11 21C8 21 6 18 6 15C6 12 8 9 12 9C16 9 19 12 19 16C19 20 17 22 14 22' },
  { name: 'Virgo', path: 'M6 4V16C6 20 9 22 12 22M10 4V16C10 20 13 22 16 22M14 4V16C14 20 17 22 20 22C23 22 25 20 25 16' },
  { name: 'Libra', path: 'M4 20H20M5 16H19M12 16V10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10V16M12 16V10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10V16' },
  { name: 'Scorpio', path: 'M4 4V16C4 20 7 22 10 22M8 4V16C8 20 11 22 14 22M12 4V16C12 20 15 22 18 22L21 24' },
  { name: 'Sagittarius', path: 'M4 20L20 4M20 4H14M20 4V10M11 11L14 14' },
  { name: 'Capricorn', path: 'M6 4V16C6 20 9 22 12 22M10 4V16C10 20 13 22 16 22L20 26' },
  { name: 'Aquarius', path: 'M4 8L8 4L12 8L16 4L20 8M4 16L8 12L12 16L16 12L20 16' },
  { name: 'Pisces', path: 'M4 4C8 12 8 12 4 20M20 4C16 12 16 12 20 20M4 12H20' },
];

const ZodiacWheel = () => {
  const [radius, setRadius] = React.useState(180);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(120);
      } else {
        setRadius(180);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none select-none">
      {/* Outer Glow - Simplified */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]"
      />

      {/* Rotating Wheel */}
      <div
        style={{ willChange: 'transform', transformZ: 0 }}
        className="relative w-full h-full border-2 border-primary/20 rounded-full flex items-center justify-center animate-celestial-rotate"
      >
        {/* Inner Rings */}
        <div className="absolute inset-4 border border-primary/10 rounded-full" />
        <div className="absolute inset-12 border border-primary/5 rounded-full" />
        
        {/* Zodiac Signs */}
        {zodiacSigns.map((sign, index) => {
          const angle = (index * 360) / zodiacSigns.length;
          return (
            <div
              key={sign.name}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              <div
                style={{ willChange: 'transform', transformZ: 0 }}
                className="flex items-center justify-center w-10 h-10 animate-celestial-rotate-reverse"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 md:w-10 md:h-10 text-primary"
                >
                  <path d={sign.path} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Element */}
      <div
        className="absolute w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-white/50"
      >
        <span className="material-symbols-outlined text-4xl md:text-6xl text-on-primary">
          brightness_high
        </span>
        
        {/* Orbit - Simplified animate for mobile */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="absolute inset-[-20px] md:inset-[-40px] border border-primary/20 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(135,82,0,1)]" />
        </motion.div>
      </div>

      {/* Decorative Particles - Disabled on Mobile */}
      {radius > 120 && [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          className="absolute text-primary/40 text-sm"
          style={{
            top: `${20 + i * 15}%`,
            left: `${15 + i * 20}%`,
          }}
        >
          <span className="material-symbols-outlined">flare</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ZodiacWheel;
