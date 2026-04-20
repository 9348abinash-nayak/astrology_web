import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleTranslate = (langCode) => {
    let changed = false;
    const select = document.querySelector('.goog-te-combo');
    
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      changed = true;
      // Also try clicking the actual item if Event doesn't trigger Google's listener
    }
    
    if (!changed || !select) {
      // Robust Fallback: Set cookie and reload
      if (langCode === 'or') {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;";
      } else {
        document.cookie = `googtrans=/or/${langCode}; path=/;`;
        document.cookie = `googtrans=/or/${langCode}; domain=` + window.location.hostname + `; path=/;`;
      }
      window.location.reload();
    }
  };

  const links = [
    { name: 'ମୁଖ୍ୟ ପୃଷ୍ଠା', path: '/' },
    { name: 'ସେବା ସମୂହ', path: '/services' },
    { name: 'ଆମ ବିଷୟରେ', path: '/about' },
    { name: 'ଯୋଗାଯୋଗ', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: isScrolled ? 'rgba(251, 249, 245, 0.95)' : 'rgba(251, 249, 245, 0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(135, 82, 0, 0.1)' : '1px solid transparent'
        }}
        className="fixed top-0 w-full z-[60] flex justify-between items-center px-6 md:px-16 py-3 transition-all duration-500"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="z-[70]"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img src={logo} alt="ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ" className="h-16 md:h-20 object-contain mix-blend-multiply drop-shadow-sm" />
          </Link>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-body text-sm tracking-[0.15em] uppercase font-semibold">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            >
              <Link 
                to={link.path} 
                className={`transition-colors duration-300 relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
                <motion.span 
                  initial={false}
                  animate={{ width: location.pathname === link.path ? '100%' : '0%' }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                ></motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-primary/20 shadow-sm mr-2">
              <span className="material-symbols-outlined text-[1rem] text-primary">translate</span>
              <button onClick={() => handleTranslate('en')} className="text-xs font-bold text-on-surface hover:text-primary transition-colors">EN</button>
              <span className="text-primary/20 text-xs">|</span>
              <button onClick={() => handleTranslate('hi')} className="text-xs font-bold text-on-surface hover:text-primary transition-colors">HI</button>
              <span className="text-primary/20 text-xs">|</span>
              <button onClick={() => handleTranslate('or')} className="text-xs font-bold text-on-surface hover:text-primary transition-colors title-odia">ଓଡି</button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="hidden md:block"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(135, 82, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg transition-all duration-300"
            >
              ଏବେ ପରାମର୍ଶ କରନ୍ତୁ
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[70] w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full text-primary"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-background md:hidden flex flex-col justify-center px-12 pt-20"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-headline font-bold transition-colors ${
                      location.pathname === link.path ? 'text-primary' : 'text-on-surface'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-lg shadow-xl">
                  ଏବେ ପରାମର୍ଶ କରନ୍ତୁ
                </button>
              </motion.div>
            </div>

            {/* Decorative Background Icon in Mobile Menu */}
            <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined !text-[20rem] text-primary">auto_awesome</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

