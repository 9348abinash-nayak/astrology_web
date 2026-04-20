import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';

const ContactModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl relative pointer-events-auto border border-primary/20"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-2xl">close</span>
              </button>

              <div className="text-center space-y-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <span className="material-symbols-outlined text-5xl text-primary drop-shadow-sm">location_on</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-headline text-on-surface">{t.hero.title}</h2>
                  <h3 className="text-xl font-bold text-primary">{t.hero.name}</h3>
                </div>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mx-auto"></div>

                <div className="space-y-6 text-on-surface-variant">
                  <p className="text-lg md:text-xl font-medium flex items-center justify-center gap-3 text-balance">
                    <span className="material-symbols-outlined text-primary/80">pin_drop</span>
                    {t.hero.location} - ୭୫୬୧୧୨
                  </p>

                  <div className="bg-gradient-to-br from-white/90 to-white/50 border border-primary/20 rounded-[2rem] p-6 shadow-lg inline-block w-full">
                    <p className="text-xs mb-2 text-primary/80 uppercase tracking-widest font-bold">{t.hero.phone}</p>
                    <a href="tel:7683853301" className="text-3xl md:text-4xl font-extrabold text-on-surface block hover:text-primary transition-colors hover:scale-105 duration-300">
                      ୭୬୮୩୮୫୩୩୦୧
                    </a>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                >
                  {t.modal.close}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
