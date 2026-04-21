import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ajaya from "../assets/ajaya.png"
import { useLanguage } from '../App';

import HoroscopeSection from '../components/HoroscopeSection';

const SplitText = ({ children, className }) => {
  return (
    <span className={className}>
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const SectionScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity', transformZ: 0 }}
    >
      {children}
    </motion.div>
  );
};

const GlowingNumber = ({ children, className = "" }) => (
  <motion.span
    animate={window.innerWidth > 768 ? {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      filter: [
        'drop-shadow(0 0 2px rgba(212, 137, 36, 0.4))',
        'drop-shadow(0 0 10px rgba(212, 137, 36, 0.8))',
        'drop-shadow(0 0 2px rgba(212, 137, 36, 0.4))'
      ]
    } : {}}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      backgroundImage: 'linear-gradient(90deg, #875200, #d48924, #ffb867, #d48924, #875200)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
    className={`font-bold ${className}`}
  >
    {children}
  </motion.span>
);

import ZodiacWheel from '../components/ZodiacWheel';

const Home = () => {
  const { lang, t } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0.05 : 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // Use direct transforms for better speed/performance (no spring physics overhead)
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -180]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -80]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      {/* Celestial Background Elements */}
      <div
        className="absolute inset-0 celestial-glow pointer-events-none"
      ></div>
      {!isMobile && <div className="absolute inset-0 grain-texture pointer-events-none"></div>}


      {/* Hero Content Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          opacity: heroOpacity, 
          scale: heroScale,
          willChange: 'opacity, transform',
          transformZ: 0 
        }}
        className="relative z-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 md:pt-48"
      >
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1 w-full">
          <motion.div variants={itemVariants} className="mb-8 w-full flex flex-col items-center lg:items-start">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent lg:from-primary lg:via-primary lg:to-transparent mb-6 rounded-full shadow-[0_0_8px_rgba(135,82,0,0.4)] lg:ml-0 mx-auto"></div>
            <span className="text-primary font-bold tracking-[0.25em] text-sm md:text-base uppercase mb-4 block drop-shadow-sm font-headline lg:text-left text-center w-full">
              {t.hero.branding}
            </span>
            <motion.div variants={itemVariants} className="mb-4 w-full py-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent lg:text-left text-center leading-[1.1] pb-2">
                {t.hero.title}
              </h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-1.5 w-full"
            >
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
                <span className="text-2xl md:text-3xl font-bold font-headline">{t.hero.name}</span>
              </div>
              <div className="flex items-center gap-2 text-primary/80 text-sm md:text-base font-medium mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{t.hero.location} - ୭୫୬୧୧୨</span>
              </div>
              <div className="flex items-center gap-2 text-primary/90 text-base font-medium mt-2">
                {t.hero.phone}: <GlowingNumber className="text-xl md:text-2xl font-bold">୭୬୮୩୮୫୩୩୦୧</GlowingNumber>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-headline text-on-surface mb-6 tracking-tight leading-[1.3] py-2 lg:text-left text-center w-full">
            {lang === 'en' ? 'Know Your' : lang === 'hi' ? 'अपना' : 'ନିଜର'} <br className="hidden lg:block" />
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #5d3900, #875200, #d48924, #875200, #5d3900)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(135, 82, 0, 0.2))'
              }}
              className="italic font-serif font-bold lg:text-left text-center inline-block py-1"
            >
              {lang === 'en' ? 'Destiny' : lang === 'hi' ? 'भाग्य जानें' : 'ଭାଗ୍ୟ ଜାଣନ୍ତୁ'}
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary font-light max-w-2xl mb-12 leading-relaxed lg:text-left text-center">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full text-base md:text-lg font-semibold shadow-lg transition-all"
            >
              {t.hero.btnJoin}
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => {
                const element = document.getElementById('horoscope');
                if (window.lenis) {
                  window.lenis.scrollTo(element);
                } else {
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 md:px-10 py-4 md:py-5 text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-2"
            >
              {t.hero.btnRashifal}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right side animated horoscope wheel */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[350px] md:h-[600px] w-full">
          <ZodiacWheel />
        </div>
      </motion.section>

      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-surface-container-low rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"
          ></motion.div>
        </>
      )}

      {/* Expert Profile Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20 mt-10 w-full">
        <SectionScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 border border-white/20 shadow-2xl overflow-visible">
            <motion.div
              style={{ y: yParallaxSlow }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl"></div>
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white/50 shadow-xl" style={{ willChange: 'transform' }}>
                <img
                  src={ajaya}
                  alt={t.profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase">{t.profile.badge}</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">{t.profile.name} </h2>
              <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">{t.profile.degree}</p>
              <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
                {t.profile.bio}
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary opacity-70">{t.profile.directContact}</p>
                    <p className="text-xl font-bold font-headline"><GlowingNumber className="text-2xl">+91 7683853301</GlowingNumber></p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer font-headline w-full">
                  <button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">chat</span>
                    {t.profile.btnContact}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionScrollReveal>
      </section>

      {/* Service Cards Section */}
      <section className="w-full py-32 bg-surface-container-low relative mt-20 overflow-hidden">
        <SectionScrollReveal>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">{t.services.badge}</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold">{t.services.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
              {t.services.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: -2,
                    transition: { duration: 0.4 }
                  }}
                  className="group relative bg-white/40 backdrop-blur-md p-10 rounded-3xl flex flex-col gap-5 transition-all border border-white/20 shadow-xl overflow-hidden cursor-pointer"
                >
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <motion.div
                      initial={{ left: '-150%', skewX: -45 }}
                      whileHover={{ left: '150%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute top-0 w-32 h-full bg-white/20 blur-xl"
                    />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2"
                    >
                      <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                    </motion.div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg font-light">{item.desc}</p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary/30">auto_awesome</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionScrollReveal>
      </section>

      {/* Horoscope Section */}
      <HoroscopeSection />
    </div>
  );
};

export default Home;