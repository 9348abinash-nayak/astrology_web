import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-removebg-preview.png';
import ContactModal from './ContactModal';
import { useLanguage } from '../App';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const links = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        style={{
          backgroundColor: 'rgba(251, 249, 245, 1)', 
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(135, 82, 0, 0.1)'
        }}
        className="fixed top-0 w-full z-[60] flex justify-between items-center px-6 md:px-16 py-2 transition-all duration-500"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="z-[70]"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          </Link>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-body text-lg tracking-[0.15em] uppercase font-bold">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-colors duration-300 ${
                location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Language */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-primary/20 shadow-sm mr-2">
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            >
              EN
            </button>
            <span className="text-primary/20 text-xs">|</span>
            <button 
              onClick={() => setLang('hi')} 
              className={`text-xs font-bold transition-colors ${lang === 'hi' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            >
              HI
            </button>
            <span className="text-primary/20 text-xs">|</span>
            <button 
              onClick={() => setLang('or')} 
              className={`text-xs font-bold transition-colors ${lang === 'or' ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
            >
              ଓଡି
            </button>
          </div>

          <div className="hidden md:block">
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg"
            >
              {t.nav.cta}
            </motion.button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-[70] w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary">
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-background md:hidden flex flex-col justify-center px-10 pt-20"
          >
            <div className="flex flex-col gap-10">
              {links.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-4xl font-headline font-bold text-on-surface">
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-xl shadow-xl"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;

