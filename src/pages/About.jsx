import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../assets/ajaya.png';
const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0.4, y: 30, filter: "blur(4px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <main className="pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0.5, x: -40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 md:order-1"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [2, 4, 2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 bg-primary/10 rounded-[4rem] blur-3xl"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-surface-container-highest shadow-2xl border-8 border-white/50"
          >
            <img

              src={image}
              alt="Pandit Shrimant Jagannath"
              className="w-full h-full object-cover"
            />

            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 right-10 text-primary"
            >
              <span className="material-symbols-outlined text-7xl">auto_awesome</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl flex items-center gap-5 border border-primary/10"
          >
            <div className="bg-primary p-4 rounded-2xl text-on-primary shadow-lg">
              <span className="material-symbols-outlined text-4xl">history_edu</span>
            </div>
            <div>
              <p className="text-xs font-label uppercase tracking-[0.2em] text-secondary opacity-70">ପରମ୍ପରା</p>
              <p className="text-2xl font-bold font-headline text-on-surface">୨୫+ ବର୍ଷ</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="order-1 md:order-2 space-y-8">
          <header className="space-y-4">
            <motion.div
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold tracking-wider uppercase"
            >
              <span className="material-symbols-outlined text-sm">stars</span>
              ପ୍ରାଚୀନ ଜ୍ଞାନ
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-on-surface font-headline py-1"
            >
              ଆମର ପରମ୍ପରା ଓ <br /><motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-primary italic inline-block py-1"
              >ଦିବ୍ୟ ଜ୍ଞାନ</motion.span>
            </motion.h1>
          </header>
          <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant font-body">
            <motion.p custom={2} variants={fadeInVariants} initial="hidden" animate="visible">
              ମା ହର୍ଷମୁଖୀ ଜ୍ୟୋତିଷ କାର୍ଯ୍ୟାଳୟ ହେଉଛି ବିଶ୍ୱାସ ଏବଂ ପାରମ୍ପରିକ ଜ୍ଞାନର ଏକ ମିଳନ ସ୍ଥଳ। ଦୀର୍ଘ ଦୁଇ ଦଶନ୍ଧିରୁ ଅଧିକ ସମୟ ଧରି ଆମେ ବୈଦିକ ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ମାଧ୍ୟମରେ ଅଗଣିତ ପରିବାରକୁ ସଠିକ୍ ମାର୍ଗ ଦର୍ଶାଇ ଆସୁଛୁ। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି ପ୍ରାଚୀନ ଋଷିମାନଙ୍କର ଏହି ଗୁପ୍ତ ବିଦ୍ୟାକୁ ସରଳ ଭାବରେ ଆପଣଙ୍କ ଜୀବନରେ ପ୍ରୟୋଗ କରିବା।
            </motion.p>
            <motion.p custom={3} variants={fadeInVariants} initial="hidden" animate="visible">
              ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର କେବଳ ଗ୍ରହ ନକ୍ଷତ୍ରର ଗଣନା ନୁହେଁ, ଏହା ଜୀବନର ଜଟିଳ ସମସ୍ୟାର ଏକ ଆଧ୍ୟାତ୍ମିକ ସମାଧାନ। ଆମେ ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିର କୁଣ୍ଡଳୀକୁ ଗଭୀର ଭାବରେ ଅନୁଧ୍ୟାନ କରି ସେମାନଙ୍କର ସଫଳତା, ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ଶାନ୍ତି ପାଇଁ ଉଚିତ୍ ପରାମର୍ଶ ପ୍ରଦାନ କରିଥାଉ।
            </motion.p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { icon: 'menu_book', title: 'ଶୁଦ୍ଧ ଗଣନା', desc: 'ବୈଦିକ ନିୟମ ଅନୁସାରେ ସଠିକ୍ ଫଳାଫଳ ପ୍ରଦାନ।' },
                { icon: 'psychology', title: 'ସରଳ ସମାଧାନ', desc: 'ଜୀବନଶୈଳୀରେ ସାମାନ୍ୟ ପରିବର୍ତ୍ତନ ମାଧ୍ୟମରେ ଉନ୍ନତି।' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={4 + i}
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              custom={6}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="italic text-on-surface font-headline border-l-4 border-primary/30 pl-6 py-2"
            >
              "ଭାଗ୍ୟ ନୁହେଁ, କର୍ମ ସହ ଗ୍ରହମାନଙ୍କର ସମନ୍ୱୟ ହିଁ ପ୍ରକୃତ ସଫଳାର ଚାବିକାଠି।"
            </motion.p>
          </div>
          <motion.div
            custom={7}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="pt-8"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <Link to="/contact" className="inline-flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
                <span className="font-semibold text-lg group-hover:text-primary transition-colors">ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Philosophical Section */}
      <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-2 space-y-6"
        >
          <h2 className="text-3xl font-headline font-bold">ଆମର ଦର୍ଶନ</h2>
          <p className="text-lg text-on-surface-variant">
            ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ପ୍ରତ୍ୟେକ ମନୁଷ୍ୟ ଏକ ସ୍ୱତନ୍ତ୍ର ଶକ୍ତି ନେଇ ଜନ୍ମ ହୋଇଥାନ୍ତି। ଆମର କାର୍ଯ୍ୟ ହେଉଛି ସେହି ଶକ୍ତିକୁ ଚିହ୍ନଟ କରିବା ଏବଂ ପ୍ରତିକୂଳ ପରିସ୍ଥିତିରେ ବି କିପରି ସକାରାତ୍ମକ ରହିହେବ ସେଥିପାଇଁ ପଥ ପ୍ରଦର୍ଶନ କରିବା। ଶାନ୍ତି ଏବଂ ସନ୍ତୁଷ୍ଟି ହିଁ ଆମର ପରାମର୍ଶର ମୂଳ ଉଦ୍ଦେଶ୍ୟ।
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="bg-surface-container-low p-8 rounded-3xl border-b-4 border-primary/20 transition-all"
        >
          <span className="material-symbols-outlined text-primary text-5xl mb-4">self_improvement</span>
          <h3 className="text-xl font-headline font-bold mb-2">ଆଧ୍ୟାତ୍ମିକ ଉନ୍ନତି</h3>
          <p className="text-sm text-on-surface-variant">ଆମେ କେବଳ ଭବିଷ୍ୟବାଣୀ କରୁନାହୁଁ, ବରଂ ଆପଣଙ୍କୁ ଆଭ୍ୟନ୍ତରୀଣ ଶକ୍ତି ବଢାଇବା ପାଇଁ ମନ୍ତ୍ର ଏବଂ ଧ୍ୟାନର ପରାମର୍ଶ ଦେଇଥାଉ।</p>
        </motion.div>
      </section>
    </main>
  );
};

export default About;

