import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import { fetchDailyHoroscopeFromProkerala } from '../utils/prokerala';

const zodiacSigns = [
  { id: 'aries', en: 'Aries', or: 'ମେଷ', hi: 'मेष', path: 'M7 14C7 11 9 9 12 9C15 9 17 11 17 14C17 17 15 19 12 19V22M12 9V5' },
  { id: 'taurus', en: 'Taurus', or: 'ବୃଷ', hi: 'वृष', path: 'M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM12 8C12 4 10 2 8 2M12 8C12 4 14 2 16 2' },
  { id: 'gemini', en: 'Gemini', or: 'ମିଥୁନ', hi: 'मिथुन', path: 'M8 4V20M16 4V20M4 4H20M4 20H20' },
  { id: 'cancer', en: 'Cancer', or: 'କର୍କଟ', hi: 'कर्क', path: 'M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM16 12C19 12 21 10 21 7C21 4 19 2 16 2C13 2 11 4 11 7M8 12C5 12 3 14 3 17C3 20 5 22 8 22C11 22 13 20 13 17' },
  { id: 'leo', en: 'Leo', or: 'ସିଂହ', hi: 'सिंह', path: 'M6 16C6 13 8 11 11 11C14 11 16 13 16 16C16 19 14 21 11 21C8 21 6 18 6 15C6 12 8 9 12 9C16 9 19 12 19 16C19 20 17 22 14 22' },
  { id: 'virgo', en: 'Virgo', or: 'କନ୍ୟା', hi: 'कन्या', path: 'M6 4V16C6 20 9 22 12 22M10 4V16C10 20 13 22 16 22M14 4V16C14 20 17 22 20 22C23 22 25 20 25 16' },
  { id: 'libra', en: 'Libra', or: 'ତୁଳା', hi: 'तुला', path: 'M4 20H20M5 16H19M12 16V10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10V16M12 16V10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10V16' },
  { id: 'scorpio', en: 'Scorpio', or: 'ବିଛା', hi: 'वृश्चिक', path: 'M4 4V16C4 20 7 22 10 22M8 4V16C8 20 11 22 14 22M12 4V16C12 20 15 22 18 22L21 24' },
  { id: 'sagittarius', en: 'Sagittarius', or: 'ଧନୁ', hi: 'धनु', path: 'M4 20L20 4M20 4H14M20 4V10M11 11L14 14' },
  { id: 'capricorn', en: 'Capricorn', or: 'ମକର', hi: 'मकर', path: 'M6 4V16C6 20 9 22 12 22M10 4V16C10 20 13 22 16 22L20 26' },
  { id: 'aquarius', en: 'Aquarius', or: 'କୁମ୍ଭ', hi: 'कुंभ', path: 'M4 8L8 4L12 8L16 4L20 8M4 16L8 12L12 16L16 12L20 16' },
  { id: 'pisces', en: 'Pisces', or: 'ମୀନ', hi: 'मीन', path: 'M4 4C8 12 8 12 4 20M20 4C16 12 16 12 20 20M4 12H20' },
];

const HoroscopeSection = () => {
  const { lang } = useLanguage();
  const [selectedSign, setSelectedSign] = useState(null);
  const [loading, setLoading] = useState(false);
  const [horoscope, setHoroscope] = useState(null);
  const [error, setError] = useState(null);

  const translateText = async (text, targetLang) => {
    if (!text || targetLang === 'en') return text;
    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
      const data = await response.json();
      return data[0].map(item => item[0]).join('');
    } catch (e) {
      console.error("Translation failed", e);
      return text;
    }
  };

  const fetchHoroscope = async (sign) => {
    setLoading(true);
    setError(null);
    setSelectedSign(sign);
    setHoroscope(null);
    
    try {
      // 1. Attempt Prokerala (Premium/Professional choice)
      try {
        const prokeralaData = await fetchDailyHoroscopeFromProkerala(sign.id, lang === 'or' ? 'or' : lang === 'hi' ? 'hi' : 'en');
        if (prokeralaData && prokeralaData.daily_prediction) {
           setHoroscope({
             description: prokeralaData.daily_prediction.prediction,
             mood: prokeralaData.daily_prediction.luck && prokeralaData.daily_prediction.luck[0] ? prokeralaData.daily_prediction.luck[0].name : "Positive",
             color: "Vedic Aura",
             lucky_number: prokeralaData.daily_prediction.luck && prokeralaData.daily_prediction.luck[1] ? prokeralaData.daily_prediction.luck[1].name : "7",
             lucky_time: "Auspicious Hour",
             date_range: new Date().toLocaleDateString()
           });
           setLoading(false);
           return;
        }
      } catch (pErr) {
        if (pErr.message === "PROKERALA_NOT_CONFIGURED") {
          console.log("Prokerala not configured, falling back to free API.");
        } else {
          console.warn("Prokerala API attempt failed, trying fallback...", pErr);
        }
      }

      // 2. Fallback to free Horoscope API + AllOrigins Proxy
      const apiUrl = `https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign.id}&day=today`;
      const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(apiUrl)}`);
      
      if (!response.ok) throw new Error('API connection failed');
      
      const result = await response.json();
      
      if (result && result.data && result.data.horoscope) {
        const rawData = result.data;
        
        // Translate content if necessary
        const targetLang = lang === 'or' ? 'or' : lang === 'hi' ? 'hi' : 'en';
        
        const [translatedDesc, translatedMood, translatedColor] = await Promise.all([
          translateText(rawData.horoscope, targetLang),
          translateText("Positive", targetLang),
          translateText("Celestial White", targetLang)
        ]);

        setHoroscope({
           description: translatedDesc,
           mood: translatedMood,
           color: translatedColor,
           lucky_number: rawData.lucky_number || "9",
           lucky_time: rawData.lucky_time || "Afternoon",
           date_range: rawData.date
        });
      } else {
        throw new Error('Invalid data format');
      }
    } catch (err) {
      console.error("Horoscope fetch failed:", err);
      setError(lang === 'or' ? 'କ୍ଷମା କରିବେ, ବର୍ତ୍ତମାନ ରାଶିଫଳ ମିଳିପାରୁନାହିଁ। ଦୟାକରି କିଛି ସମୟ ପରେ ଚେଷ୍ଟା କରନ୍ତୁ।' : 
             lang === 'hi' ? 'क्षमा करें, वर्तमान में राशिफल उपलब्ध नहीं है। कृपया बाद में प्रयास करें।' : 
             'Sorry, horoscope is not available right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="horoscope" className="w-full py-20 bg-white/30 backdrop-blur-sm relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
            {lang === 'or' ? 'ଦୈନିକ ଭାଗ୍ୟ' : lang === 'hi' ? 'दैनिक भाग्य' : 'Daily Destiny'}
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            {lang === 'or' ? 'ଆପଣଙ୍କ ରାଶିଫଳ' : lang === 'hi' ? 'आपका राशिफल' : 'Your Horoscope'}
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-20">
          {zodiacSigns.map((sign) => (
            <motion.button
              key={sign.id}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fetchHoroscope(sign)}
              style={{ transform: 'translateZ(0)' }}
              className={`flex flex-col items-center p-4 rounded-2xl transition-all border ${
                selectedSign?.id === sign.id 
                ? 'bg-primary text-on-primary border-primary shadow-lg' 
                : 'bg-white/50 border-primary/10 text-on-surface hover:border-primary/40'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-10 h-10 mb-2 ${selectedSign?.id === sign.id ? 'text-on-primary' : 'text-primary'}`}
              >
                <path d={sign.path} />
              </svg>
              <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-normal mt-1 text-center leading-tight">
                {lang === 'or' ? sign.or : lang === 'hi' ? sign.hi : sign.en}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-primary font-medium">
                {lang === 'or' ? 'ଫଳାଫଳ ଗଣନା ଚାଲିଛି...' : lang === 'hi' ? 'गणना हो रही है...' : 'Calculating destiny...'}
              </p>
            </motion.div>
          )}

          {!loading && error && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto p-8 bg-error-container/20 border border-error/20 rounded-3xl text-center"
            >
              <span className="material-symbols-outlined text-4xl text-error mb-4">error</span>
              <p className="text-lg text-on-surface-variant">{error}</p>
              <p className="mt-4 text-sm opacity-70">
                 (Please try again in a few moments)
              </p>
            </motion.div>
          )}

          {!loading && horoscope && selectedSign && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-white to-primary/5 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-visible"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-5 select-none">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-48 h-48 text-primary"
                >
                  <path d={selectedSign.path} />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-lg p-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d={selectedSign.path} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-headline font-bold text-on-surface">
                      {lang === 'or' ? selectedSign.or : lang === 'hi' ? selectedSign.hi : selectedSign.en}
                    </h3>
                    <p className="text-primary font-medium uppercase tracking-widest text-sm">
                      {horoscope.date_range}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-on-surface italic font-serif py-2">
                       "{horoscope.description}"
                     </p>
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Mood / ମନୋଭାବ</p>
                      <p className="text-xl font-headline font-semibold text-on-surface">{horoscope.mood}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 bg-white shadow-sm rounded-2xl border border-primary/10">
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                        {lang === 'or' ? 'ଶୁଭ ରଙ୍ଗ (Color)' : lang === 'hi' ? 'शुभ रंग (Color)' : 'Lucky Color'}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border bg-primary/20"></div>
                        <p className="font-semibold">{horoscope.color || 'White'}</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white shadow-sm rounded-2xl border border-primary/10">
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                        {lang === 'or' ? 'ଶୁଭ ସଂଖ୍ୟା (Number)' : lang === 'hi' ? 'शुभ अंक (Number)' : 'Lucky Number'}
                      </p>
                      <p className="text-2xl font-bold text-primary">{horoscope.lucky_number}</p>
                    </div>
                    <div className="p-5 bg-white shadow-sm rounded-2xl border border-primary/10">
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                        {lang === 'or' ? 'ଶୁଭ ସମୟ (Time)' : lang === 'hi' ? 'शुभ समय (Time)' : 'Lucky Time'}
                      </p>
                      <p className="font-semibold">{horoscope.lucky_time}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/10 text-center">
                  <p className="text-sm text-on-surface-variant italic">
                    {lang === 'or' ? 'ନିଜର ଗ୍ରହ ଦୋଷର ନିରାକରଣ ପାଇଁ ଗୁରୁଜୀଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।' : 
                     lang === 'hi' ? 'अपनी ग्रहों की चाल के सटीक समाधान के लिए गुरुजी से संपर्क करें।' : 
                     'Contact Guruji for personalized solutions based on your planetary alignments.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {!loading && !horoscope && !error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="mb-6 opacity-20">
                <span className="material-symbols-outlined text-9xl">auto_awesome</span>
              </div>
              <p className="text-xl text-on-surface-variant font-light">
                {lang === 'or' ? 'ଆପଣଙ୍କ ରାଶି ଚୟନ କରନ୍ତୁ ଏବଂ ଆଜିର ଭାଗ୍ୟ ଜାଣନ୍ତୁ' : 
                 lang === 'hi' ? 'अपनी राशि चुनें और आज का भाग्य जानें' : 
                 'Select your zodiac sign to discover today\'s fortune'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HoroscopeSection;
