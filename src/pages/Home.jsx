import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ajaya from "../assets/ajaya.png"
const SplitText = ({ children, className }) => {
  return (
    <span className={className}>
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const GlowingNumber = ({ children, className = "" }) => (
  <motion.span
    animate={{ 
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      filter: [
        'drop-shadow(0 0 2px rgba(212, 137, 36, 0.4))',
        'drop-shadow(0 0 10px rgba(212, 137, 36, 0.8))',
        'drop-shadow(0 0 2px rgba(212, 137, 36, 0.4))'
      ]
    }}
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

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(yParallax, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Celestial Background Elements */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 celestial-glow"
      ></motion.div>
      <div className="absolute inset-0 grain-texture"></div>
      
      {/* Decorative Star Accents with Parallax */}
      <motion.div 
        style={{ y: smoothY }}
        animate={{ 
          rotate: [0, 15, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] transform"
      >
        <span className="material-symbols-outlined text-primary text-6xl">star</span>
      </motion.div>
      
      <motion.div 
        style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [0, -300])) }}
        animate={{ 
          rotate: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[15%] transform"
      >
        <span className="material-symbols-outlined text-primary text-8xl">auto_awesome</span>
      </motion.div>

      {/* Hero Content Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-20"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block underline-offset-8">ଏକ ପବିତ୍ର ପଥ ଆପଣଙ୍କ ଅପେକ୍ଷାରେ</span>
          <motion.div variants={itemVariants} className="mb-4">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
  ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ କାର୍ଯ୍ୟାଳୟ
</h1>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-sm md:text-base text-primary/80 font-medium flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            ଆଣ୍ଡେଇପଲ୍ଲି, ଭଦ୍ରକ, ଓଡିଶା - ୭୫୬୧୧୨,ମୋବାଇଲ୍: <GlowingNumber>୭୬୮୩୮୫୩୩୦୧</GlowingNumber>
          </motion.p>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-headline text-on-surface mb-6 tracking-tight leading-none overflow-hidden">
          ନିଜର <br/>
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
            className="italic font-serif font-bold"
          >
            ଭାଗ୍ୟ ଜାଣନ୍ତୁ
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary font-light max-w-2xl mb-12 leading-relaxed">
          ଶାଶ୍ୱତ ଜ୍ଞାନ <span className="mx-4 text-outline-variant">|</span> ବିଶ୍ୱାସନୀୟ ମାର୍ଗଦର୍ଶନ
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full sm:w-auto">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full text-base md:text-lg font-semibold shadow-lg transition-all"
          >
            ଆମ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ
          </motion.button>
          <motion.button 
            whileHover={{ x: 5 }}
            className="px-8 md:px-10 py-4 md:py-5 text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-2"
          >
            ରାଶିଫଳ ଦେଖନ୍ତୁ
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Floating Abstract Element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-surface-container-low rounded-full mix-blend-multiply filter blur-3xl"
      ></motion.div>
        <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl"
      ></motion.div>

      {/* Expert Profile Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20 mt-10 w-full">
        <SectionScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 border border-white/20 shadow-2xl overflow-hidden">
            <motion.div
              style={{ y: yParallaxSlow }}
              className="relative"
            >
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl"></div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white/50 shadow-xl">
              <img 
                src={ajaya} 
                alt="Pandit Shrimant Jagannath" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-on-primary border-4 border-white shadow-lg"
            >
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase">ସୁବର୍ଣ୍ଣ ମାର୍ଗଦର୍ଶନ</span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">ଅଜୟ ନାୟକ </h2>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">(ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ରରେ ସ୍ନାତକ (ବି.ଏ.))</p>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
              ଦୀର୍ଘ ୨୫ ବର୍ଷରୁ ଅଧିକ ସମୟ ଧରି ଜ୍ୟୋତିଷ ଗବେଷଣା ଏବଂ ଗଭୀର ବୈଦିକ ଜ୍ଞାନ ମାଧ୍ୟମରେ, ପଣ୍ଡିତ ଜୀ ବିଶ୍ୱର ହଜାର ହଜାର ବ୍ୟକ୍ତିଙ୍କୁ ସେମାନଙ୍କର ପ୍ରକୃତ ଭାଗ୍ୟ ଚିହ୍ନିବାରେ ମାର୍ଗଦର୍ଶନ କରିଛନ୍ତି।
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary opacity-70">ସିଧାସଳଖ ପରାମର୍ଶ</p>
                  <p className="text-xl font-bold font-headline"><GlowingNumber className="text-2xl">+91 7683853301</GlowingNumber></p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer font-headline">
                 <button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">chat</span>
                    ଏବେ ଯୋଗାଯୋଗ କରନ୍ତୁ
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
              <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">ଦିବ୍ୟ ଜ୍ୟୋତିଷ ସେବା</span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold">ସମ୍ପୂର୍ଣ୍ଣ ଆଧ୍ୟାତ୍ମିକ ଓ ଜ୍ୟୋତିଷ ପରାମର୍ଶ</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: 'storm', title: 'କୁଣ୍ଡଳୀ ବିଶ୍ଳେଷଣ', desc: "ଆପଣଙ୍କ କୁଣ୍ଡଳୀର ଗଭୀର ଅନୁଧ୍ୟାନ କରି ଜୀବନର କର୍ମଫଳ ବିଷୟରେ ଜାଣନ୍ତୁ।" },
            { icon: 'diamond', title: 'ରତ୍ନ ପରାମର୍ଶ', desc: 'ଗ୍ରହମାନଙ୍କ ପ୍ରଭାବକୁ ସନ୍ତୁଳିତ କରିବା ପାଇଁ ସଠିକ୍ ରତ୍ନର ପରାମର୍ଶ।' },
            { icon: 'calendar_month', title: 'ଶୁଭ ମୁହୂର୍ତ୍ତ', desc: 'ସଫଳତା ଏବଂ ସମୃଦ୍ଧି ପାଇଁ ଶୁଭ ସମୟର ସଠିକ୍ ନିର୍ଣ୍ଣୟ।' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.1)" }}
              className="bg-surface-container-lowest p-10 rounded-xl flex flex-col gap-4 group transition-all"
            >
              <motion.span 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="material-symbols-outlined text-primary text-4xl"
              >{item.icon}</motion.span>
              <h3 className="text-2xl font-headline font-bold">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
            </div>
          </div>
        </SectionScrollReveal>
      </section>
    </div>
  );
};

export default Home;

