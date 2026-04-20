import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full py-12 px-8 bg-stone-50 dark:bg-stone-950 border-t border-amber-500/20"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-amber-800 dark:text-amber-200 font-serif font-semibold text-xl"
          >
            ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ କାର୍ଯ୍ୟାଳୟ
          </motion.div>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-serif">
            ଅଣ୍ଢେଇପଲ୍ଲୀ, ଭଦ୍ରକ, ଓଡିଶା - ୭୫୬୧୧୨
          </p>
        </div>
        <p className="font-serif italic text-base text-center text-stone-500 dark:text-stone-400">
          © 2026 ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ କାର୍ଯ୍ୟାଳୟ. ସବୁ ପଥ ଗ୍ରହ ନକ୍ଷତ୍ରର କୃପାରେ ନିର୍ଦ୍ଧାରିତ।
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

