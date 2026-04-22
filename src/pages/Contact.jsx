import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <main className="pt-32 md:pt-40 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0.5, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">ନିଜ ଭାଗ୍ୟ ସହ ସଂଯୋଗ ସ୍ଥାପନ କରନ୍ତୁ</span>
          <h1 className="text-4xl md:text-7xl font-bold text-on-surface mb-6 leading-[1.2] font-headline py-1">
            ସମ୍ପର୍କ <motion.span 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="italic text-primary font-light inline-block py-1"
            >କରନ୍ତୁ</motion.span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ମାଧ୍ୟମରେ ଗ୍ରହ ନକ୍ଷତ୍ରର ସ୍ଥିତି ଜାଣି ସ୍ପଷ୍ଟ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ। ନିଜର ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ, ଆମେ ଆପଣଙ୍କୁ ସଠିକ୍ ପଥ ଦେଖାଇବୁ।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0.5, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/20"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center space-y-8 py-8 md:py-12"
            >
              <div className="bg-primary/10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2 shadow-inner border border-primary/20">
                <span className="material-symbols-outlined text-5xl md:text-6xl text-primary drop-shadow-sm">location_on</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-on-surface leading-tight">ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିର୍ବିଦ୍ୟା</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">ଅଜୟ ନାୟକ</h3>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mx-auto"></div>

              <div className="space-y-8 text-on-surface-variant w-full">
                <p className="text-xl md:text-2xl font-medium flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-primary/80 text-2xl">pin_drop</span>
                  ଅଣ୍ଢେଇପଲ୍ଲୀ, ଭଦ୍ରକ, ଓଡ଼ିଶା - ୭୫୬୧୧୨
                </p>
                
                <div className="bg-gradient-to-br from-white/60 to-white/30 border border-primary/20 rounded-[2rem] p-8 inline-block shadow-lg backdrop-blur-sm group hover:border-primary/50 transition-colors w-full md:w-auto">
                  <p className="text-sm md:text-base mb-3 text-primary/80 uppercase tracking-[0.2em] font-bold">ସିଧାସଳଖ ଯୋଗାଯୋଗ</p>
                  <a href="tel:7683853301" className="text-3xl md:text-5xl font-bold text-on-surface block hover:text-primary transition-colors">
                    ୭୬୮୩୮୫୩୩୦୧
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Sidebar Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image Card */}
            <motion.div 
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group shadow-xl"
            >
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                alt="ପବିତ୍ର ସ୍ଥାନ" 
                className="w-full h-full object-cover transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHVFyzpH8dwZqchiiBiVR7ibDNmFwCvkNmEvvmXRDHf4KwvZeyjNsepxwvkYqNG9l1iv6GAOzbF-AeZ5RnSqFRGRL4eetQWnocUJVX7O7yxrV-uI_eG97ikYgmy6o2u3d-iUFWRvfXOsS9Un20sPyv9jo9WSG4god8tk9dpdTIfpT2AAbsXDFj_4j4mqhUlOKvgv8K6R_y6N8cm7_IQAPeh6-9qq2dZ6M_4jpPoKi7L6TUhzQcLbcFIPLGuLfIAx7uwmILSIWxdkK"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-serif italic text-xl"
                >"ତାରାମାନେ ହେଉଛନ୍ତି ଈଶ୍ୱରଙ୍କ ଦ୍ୱାରା ଲିଖିତ ଜ୍ଞାନର ଅକ୍ଷର।"</motion.p>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: 'call', title: 'ଆମକୁ କଲ୍ କରନ୍ତୁ', val: '+91 7683853301', bg: 'bg-white/50' },
                { icon: 'chat_bubble', title: 'ହ୍ୱାଟ୍ସଆପ୍', val: 'ଗୁରୁଜୀଙ୍କ ସହ କଥା ହୁଅନ୍ତୁ', bg: 'bg-secondary-container' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${item.bg} p-6 md:p-8 rounded-[2rem] transition-all border border-outline-variant/10`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                  <h3 className="text-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg font-medium">{item.val}</p>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0.5, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="md:col-span-2 bg-white/80 p-6 md:p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-tertiary-fixed-dim/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">schedule</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline">ପରାମର୍ଶ କରିବାର ସମୟ</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span>ସୋମବାର — ଶନିବାର</span>
                    <span className="font-semibold text-on-surface">09:00 AM — 08:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface-variant">
                    <span>ରବିବାର</span>
                    <span className="font-semibold text-primary">କେବଳ ପୂର୍ବ ନିର୍ଦ୍ଧାରିତ ସମୟ ଅନୁସାରେ</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-3xl overflow-hidden h-48 relative border border-outline-variant/20 group"
            >
              <img 
                alt="ମାନଚିତ୍ର ସ୍ଥାନ" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmQwoQ0Y5TCrD0SVH83xhXVmViysnBSwGlov-rzkmuC1Jvno79L5eiRp0kJM-wCSqK4qsP9rHmqPGJJNmnNwGJY-h73xU8E8vTE_eF_aNjtTlChJ5eMwNnQQPXzlaFX6fNutfix6hKXa0JHxLRAMpyNaWM2HxbhnKyRWeZ5ylz59NDkuNRdLmSBdoAIpLBva-3Xt6LGkBpQgs78-7DjkCFtg5bZ-ozmq6JYe7rwRJf1vRx6BAhnoHvJPHE8pVSz4-pBnO7F47bfcsI"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
                <motion.div 
                  initial={{ bounce: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-medium">ଅଣ୍ଢେଇପଲ୍ଲୀ, ଭଦ୍ରକ, ଓଡିଶା</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

