
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Facebook, Instagram, Youtube, Send } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  tagline?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'AquaMarine',
  tagline = 'Ваш надежный партнер в мире водных путешествий'
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              className="flex items-center gap-3 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{companyName}</span>
            </motion.div>
            <p className="text-cyan-200 mb-4 sm:mb-6">
              {tagline}
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[Facebook, Instagram, Youtube, Send].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Каталог</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Спортивные катера', 'Семейные катера', 'Рыболовные катера', 'Люксовые яхты', 'Запчасти'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cyan-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Услуги</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Сервисное обслуживание', 'Страхование', 'Обучение', 'Хранение', 'Аренда'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cyan-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Контакты</h4>
            <ul className="space-y-2 sm:space-y-3 text-cyan-200">
              <li>г. Москва, Причал Северный</li>
              <li>
                <a href="tel:+78005553535" className="hover:text-white transition-colors">
                  +7 (800) 555-35-35
                </a>
              </li>
              <li>
                <a href="mailto:info@aquamarine.ru" className="hover:text-white transition-colors">
                  info@aquamarine.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-700/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cyan-300 text-sm sm:text-base text-center sm:text-left">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#" className="text-cyan-300 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-cyan-300 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
