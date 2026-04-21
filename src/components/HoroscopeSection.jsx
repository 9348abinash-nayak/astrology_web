import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import { fetchDailyHoroscopeFromProkerala } from '../utils/prokerala';

const zodiacSigns = [
  { id: 'aries', en: 'Aries', or: 'ମେଷ', hi: 'मेष', icon: '♈' },
  { id: 'taurus', en: 'Taurus', or: 'ବୃଷ', hi: 'वृष', icon: '♉' },
  { id: 'gemini', en: 'Gemini', or: 'ମିଥୁନ', hi: 'मिथुन', icon: '♊' },
  { id: 'cancer', en: 'Cancer', or: 'କର୍କଟ', hi: 'कर्क', icon: '♋' },
  { id: 'leo', en: 'Leo', or: 'ସିଂହ', hi: 'सिंह', icon: '♌' },
  { id: 'virgo', en: 'Virgo', or: 'କନ୍ୟା', hi: 'कन्या', icon: '♍' },
  { id: 'libra', en: 'Libra', or: 'ତୁଳା', hi: 'तुला', icon: '♎' },
  { id: 'scorpio', en: 'Scorpio', or: 'ବିଛା', hi: 'वृश्चिक', icon: '♏' },
  { id: 'sagittarius', en: 'Sagittarius', or: 'ଧନୁ', hi: 'धनु', icon: '♐' },
  { id: 'capricorn', en: 'Capricorn', or: 'ମକର', hi: 'मकर', icon: '♑' },
  { id: 'aquarius', en: 'Aquarius', or: 'କୁମ୍ଭ', hi: 'कुंभ', icon: '♒' },
  { id: 'pisces', en: 'Pisces', or: 'ମୀନ', hi: 'मीन', icon: '♓' },
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
              <span className="text-3xl mb-2">{sign.icon}</span>
              <span className="text-xs font-bold uppercase tracking-tighter">
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
              className="max-w-4xl mx-auto bg-gradient-to-br from-white to-primary/5 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl select-none">
                {selectedSign.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {selectedSign.icon}
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
                    <p className="text-xl leading-relaxed text-on-surface italic font-serif">
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
