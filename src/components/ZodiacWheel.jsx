import React from 'react';
import { motion } from 'framer-motion';

const zodiacSigns = [
  { icon: 'aries', symbol: '♈', name: 'Aries' },
  { icon: 'taurus', symbol: '♉', name: 'Taurus' },
  { icon: 'gemini', symbol: '♊', name: 'Gemini' },
  { icon: 'cancer', symbol: '♋', name: 'Cancer' },
  { icon: 'leo', symbol: '♌', name: 'Leo' },
  { icon: 'virgo', symbol: '♍', name: 'Virgo' },
  { icon: 'libra', symbol: '♎', name: 'Libra' },
  { icon: 'scorpio', symbol: '♏', name: 'Scorpio' },
  { icon: 'sagittarius', symbol: '♐', name: 'Sagittarius' },
  { icon: 'capricorn', symbol: '♑', name: 'Capricorn' },
  { icon: 'aquarius', symbol: '♒', name: 'Aquarius' },
  { icon: 'pisces', symbol: '♓', name: 'Pisces' },
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
        animate={radius > 120 ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]"
      />

      {/* Rotating Wheel */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: 'transform' }}
        className="relative w-full h-full border-2 border-primary/20 rounded-full flex items-center justify-center"
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
              <motion.div
                animate={{ rotate: -360 - angle }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ willChange: 'transform' }}
                className="text-2xl md:text-3xl lg:text-4xl text-primary flex items-center justify-center w-10 h-10"
              >
                <span style={{ filter: 'drop-shadow(0 0 6px rgba(212, 137, 36, 0.6))', fontFamily: 'serif' }}>
                  {sign.symbol + '\uFE0E'}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

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
