import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { 
      icon: 'auto_awesome', 
      title: 'କୁଣ୍ଡଳୀ ବିଚାର', 
      desc: "ଆପଣଙ୍କ କୁଣ୍ଡଳୀର ଗଭୀର ବିଶ୍ଳେଷଣ ମାଧ୍ୟମରେ ଆପଣଙ୍କ ବ୍ୟକ୍ତିତ୍ୱ ଏବଂ ଜୀବନର ଆହ୍ୱାନଗୁଡ଼ିକୁ ଜାଣନ୍ତୁ।",
      bg: 'bg-surface-container-low',
      decorIcon: 'star_half'
    },
    { 
      icon: 'favorite', 
      title: 'ଯୋଟକ ମେଳକ', 
      desc: 'ବିବାହ ପୂର୍ବରୁ ଗୁଣ ମେଳକ ଏବଂ ଗ୍ରହ ଦୋଷର ବିଚାର କରି ଏକ ସୁଖୀ ଦାମ୍ପତ୍ୟ ଜୀବନ ସୁନିଶ୍ଚିତ କରନ୍ତୁ।',
      bg: 'bg-surface-container-lowest',
      decorIcon: 'all_inclusive'
    },
    { 
      icon: 'insights', 
      title: 'ବୃତ୍ତିଗତ ସଫଳତା', 
      desc: 'ଆପଣଙ୍କ ପାଇଁ ଶ୍ରେଷ୍ଠ ବୃତ୍ତି କିମ୍ବା ବ୍ୟବସାୟ ଚିହ୍ନଟ କରନ୍ତୁ ଏବଂ ସଠିକ୍ ସମୟରେ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।',
      bg: 'bg-surface-container-lowest',
      decorIcon: 'trending_up'
    },
    { 
      icon: 'psychology', 
      title: 'ପାରିବାରିକ ସମନ୍ୱୟ', 
      desc: 'ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ମାଧ୍ୟମରେ ପାରିବାରିକ ଏବଂ ବ୍ୟକ୍ତିଗତ ମନୋମାଳିନ୍ୟ ଦୂର କରି ଶାନ୍ତି ପାଆନ୍ତୁ।',
      bg: 'bg-surface-container-low',
      decorIcon: 'groups'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <main className="pt-32 md:pt-40 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Heading */}
      <motion.header 
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <motion.div 
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-semibold tracking-widest uppercase"
        >
          ଦିବ୍ୟ ଅନୁଭୂତି
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-on-surface font-headline py-1"
        >
          ଆମର ପରମ୍ପରା ଓ <br /><motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-primary italic inline-block py-1"
          >ଦିବ୍ୟ ଜ୍ଞାନ</motion.span>
        </motion.h1>
        <p className="mt-8 text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          ପ୍ରାଚୀନ ବୈଦିକ ଜ୍ଞାନର ଆଲୋକରେ ଜୀବନର ଜଟିଳତା ଦୂର କରି ଶାନ୍ତି ଓ ସମୃଦ୍ଧି ପ୍ରାପ୍ତ କରନ୍ତୁ। ଆମର ସେବାଗୁଡ଼ିକ ଆପଣଙ୍କୁ ସ୍ପଷ୍ଟ ମାର୍ଗଦର୍ଶନ ଦେବା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ।
        </p>
      </motion.header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 40px 80px -15px rgba(135, 82, 0, 0.15)",
              borderColor: "rgba(135, 82, 0, 0.3)"
            }}
            className={`group flex flex-col items-start p-6 sm:p-10 ${service.bg} rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 relative overflow-visible border border-outline-variant/10 shadow-sm`}
            style={{ transformZ: 0 }}
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="mb-8 text-primary bg-primary/10 p-5 rounded-2xl"
            >
              <span className="material-symbols-outlined text-4xl">{service.icon}</span>
            </motion.div>
            <h3 className="text-3xl font-bold mb-4 text-on-surface font-headline">{service.title}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {service.desc}
            </p>
            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-auto flex items-center gap-3 text-primary font-bold group/link cursor-pointer"
            >
              <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-1 uppercase tracking-widest text-sm">ସବିଶେଷ ଜାଣନ୍ତୁ</span>
              <span className="material-symbols-outlined !text-xl group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
            </motion.div>
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
                opacity: [0.03, 0.05, 0.03]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 pointer-events-none"
            >
              <span className="material-symbols-outlined !text-[15rem] text-primary">{service.decorIcon}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Vastu Puja Special Section */}
      <motion.section 
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-28 mb-10"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-surface-container-lowest via-[#FFF9E6] to-[#FFEFE0] border border-primary/20 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(135,82,0,0.1)] group">
          {/* Subtle Background Pattern / Glow */}
          <div className="absolute inset-0 celestial-glow opacity-50"></div>
          <div className="absolute -top-20 -right-20 text-primary/5 pointer-events-none transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110">
            <span className="material-symbols-outlined !text-[25rem]">temple_hindu</span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Icon / Graphics Side */}
            <div className="w-full lg:w-1/3 flex justify-center relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/60 backdrop-blur-md border-[8px] border-white shadow-xl flex items-center justify-center relative z-10"
              >
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                <span className="material-symbols-outlined !text-7xl md:!text-9xl text-primary drop-shadow-md">home</span>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-10 md:top-2 md:right-16 z-20"
              >
                <span className="material-symbols-outlined !text-4xl text-primary-fixed-dim drop-shadow-lg">stars</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-10 md:bottom-2 md:left-16 z-20"
              >
                <span className="material-symbols-outlined !text-3xl text-primary-container drop-shadow-lg">flare</span>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary/20 text-primary text-sm font-bold mb-6 backdrop-blur-sm shadow-sm">
                <span className="material-symbols-outlined !text-lg">wb_twilight</span>
                ସ୍ୱତନ୍ତ୍ର ସେବା
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface font-headline mb-6">
                ଗୃହ ବନ୍ଧା ବାସ୍ତୁ ପୂଜା
              </h2>
              
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-3xl">
                ଆପଣଙ୍କ ନୂତନ ଘର ପାଇଁ ଶୁଭ ଶକ୍ତି ଓ ସକାରାତ୍ମକ ଉର୍ଜା ଆଣିବା ପାଇଁ ବିଧିବତ୍ ବାସ୍ତୁ ପୂଜା କରାଯାଏ। ଏହା ଆପଣଙ୍କ ଘରକୁ ଶାନ୍ତି, ସମୃଦ୍ଧି ଓ ସଫଳତା ଦେଇଥାଏ।
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                {[
                  { icon: 'security', text: 'ବାସ୍ତୁ ଦୋଷ ନିବାରଣ' },
                  { icon: 'event_available', text: 'ଶୁଭ ମୁହୂର୍ତ୍ ନିର୍ଦ୍ଧାରଣ' },
                  { icon: 'spa', text: 'ପୂର୍ଣ୍ଣ ବିଧିରେ ପୂଜା ପାଠ' },
                  { icon: 'favorite', text: 'ପରିବାରର ସୁଖ ଶାନ୍ତି ପାଇଁ ଆଶୀର୍ବାଦ' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/40 p-3 rounded-2xl border border-white/50 shadow-[0_4px_15px_-10px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-12 rounded-full bg-white flex flex-shrink-0 items-center justify-center shadow-sm text-primary">
                      <span className="material-symbols-outlined !text-2xl">{feature.icon}</span>
                    </div>
                    <span className="font-semibold text-on-surface text-[1.1rem] leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-on-primary-container transition-all"
              >
                ପରାମର୍ଶ ନିଅନ୍ତୁ
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-2">arrow_right_alt</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Asymmetric Decorative Section */}
      <section className="mt-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_9zATeinJvVEiy0lmXfnxpsjEilaEhdUUfSk-5u3hRl5pLdLCpdnqpXfGQ48ItGGoNvJKOVW3WJ4my9UPeO7HYe6EzOukO0H0SlPe84nh5ntC6HUBgIdXKku9HxLtCC13vcBHp9LLSAHbBijgWanVCSn7mGl4uqEm1caK3RxhEJyQx8aiBtMX4a6wvSzWO2CBwHlbhTATRk0zTLYYuuepIdT4miWtWqyGTkPsT6iaxyRT_n9ghwefkMvMOpvAfCXQjb70AzanuWfM"
              alt="Vintage brass telescope and star maps"
            />
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-primary-fixed rounded-full blur-3xl"
          ></motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-on-surface font-headline">ପବିତ୍ର ପରମ୍ପରା, ଆଧୁନିକ ସ୍ପଷ୍ଟତା।</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ କାର୍ଯ୍ୟାଳୟରେ ପ୍ରତ୍ୟେକ ପରାମର୍ଶ ଅତ୍ୟନ୍ତ ଗୋପନୀୟ ଏବଂ ନୈତିକତା ସହ ଶେଷ କରାଯାଏ। ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ହେଉଛି ଉନ୍ନତିର ଏକ ମାଧ୍ୟମ।
          </p>
          <div className="flex gap-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-4 bg-white/50 backdrop-blur-sm border border-outline-variant/20 rounded-lg flex-1 transition-all"
            >
              <div className="text-primary font-bold text-3xl mb-1">20+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">ବର୍ଷର ଅନୁଭବ</div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-4 bg-white/50 backdrop-blur-sm border border-outline-variant/20 rounded-lg flex-1 transition-all"
            >
              <div className="text-primary font-bold text-3xl mb-1">5k+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">ସନ୍ତୁଷ୍ଟ ଗ୍ରାହକ</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;

