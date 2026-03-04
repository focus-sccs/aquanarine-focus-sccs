
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Waves, ChevronRight } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Премиальные катера для незабываемых путешествий',
  subtitle = 'Откройте для себя свободу морских просторов с нашими эксклюзивными катерами. Качество, надежность и стиль в каждой детали.',
  ctaText = 'Смотреть каталог',
  backgroundImage = 'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1920'
}) => {
  return (
    <section id="hero" className="relative pt-20 sm:pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Ocean background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-700 font-medium mb-6 shadow-lg"
            >
              <Anchor className="w-4 h-4" />
              <span>Более 15 лет на рынке</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-sky-900 leading-tight mb-6">
              {title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-sky-700 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
                <ChevronRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-sky-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-white transition-all border border-cyan-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Узнать больше
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-cyan-200"
            >
              <div>
                <div className="text-3xl font-bold text-sky-900">500+</div>
                <div className="text-sky-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-900">50+</div>
                <div className="text-sky-600">Моделей катеров</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-900">15</div>
                <div className="text-sky-600">Лет опыта</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-3xl blur-2xl opacity-30" />
              <img
                src="https://images.pexels.com/photos/1102222/pexels-photo-1102222.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury yacht"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sky-900">Гарантия 5 лет</div>
                  <div className="text-sm text-sky-600">На все катера</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
