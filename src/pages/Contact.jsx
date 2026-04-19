import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">ନିଜ ଭାଗ୍ୟ ସହ ସଂଯୋଗ ସ୍ଥାପନ କରନ୍ତୁ</span>
          <h1 className="text-4xl md:text-7xl font-bold text-on-surface mb-6 leading-tight font-headline">
            ସମ୍ପର୍କ <motion.span 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="italic text-primary font-light"
            >କରନ୍ତୁ</motion.span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ମାଧ୍ୟମରେ ଗ୍ରହ ନକ୍ଷତ୍ରର ସ୍ଥିତି ଜାଣି ସ୍ପଷ୍ଟ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ। ନିଜର ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ, ଆମେ ଆପଣଙ୍କୁ ସଠିକ୍ ପଥ ଦେଖାଇବୁ।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/20"
          >
            <motion.form 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <motion.div variants={itemVariants} className="group">
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">Full Name | ପୂରା ନାମ</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1 text-lg" 
                    placeholder="ଉଦାହରଣ: ରାଜେଶ କୁମାର" 
                    type="text"
                  />
                </motion.div>
                {/* Phone */}
                <motion.div variants={itemVariants} className="group">
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">Phone Number | ଫୋନ୍ ନମ୍ବର</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1 text-lg" 
                    placeholder="+91 00000 00000" 
                    type="tel"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* DOB */}
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">ଜନ୍ମ ତାରିଖ</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1" type="date"/>
                </div>
                {/* TOB */}
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">ଜନ୍ମ ସମୟ</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1" type="time"/>
                </div>
                {/* POB */}
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">ଜନ୍ମ ସ୍ଥାନ</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1" 
                    placeholder="ସହର, ରାଜ୍ୟ" 
                    type="text"
                  />
                </div>
              </motion.div>
              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-on-surface-variant mb-2 ml-1">Your Question or Message | ଆପଣଙ୍କର ପ୍ରଶ୍ନ</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-colors py-4 px-1 text-lg resize-none" 
                  placeholder="ଗ୍ରହମାନେ ଆଜି ଆପଣଙ୍କୁ କିପରି ମାର୍ଗଦର୍ଶନ କରିପାରିବେ?" 
                  rows="4"
                ></textarea>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px -10px rgba(135, 82, 0, 0.3)",
                  backgroundImage: "linear-gradient(to right, #875200, #ffb867)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl font-bold text-lg shadow-xl transition-all duration-500" 
                type="button"
              >
                ପରାମର୍ଶ ପାଇଁ ଅନୁରୋଧ କରନ୍ତୁ
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Info Sidebar Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
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
                  initial={{ opacity: 0, scale: 0.9 }}
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
                initial={{ opacity: 0, y: 20 }}
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
                  <span className="font-medium">ଆଣ୍ଡେଇପଲ୍ଲି, ଭଦ୍ରକ, ଓଡିଶା</span>
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

