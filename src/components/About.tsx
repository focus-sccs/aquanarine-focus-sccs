
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, TrendingUp } from 'lucide-react';

interface AboutProps {
  title?: string;
  description?: string;
}

export const About: React.FC<AboutProps> = ({
  title = 'О нашей компании',
  description = 'AquaMarine — ведущий дилер премиальных катеров в России. Мы предлагаем только проверенные модели от мировых производителей с полной гарантией и сервисным обслуживанием.'
}) => {
  const stats = [
    { icon: Award, value: '500+', label: 'Проданных катеров' },
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
    { icon: Shield, value: '5 лет', label: 'Гарантия' },
    { icon: TrendingUp, value: '15 лет', label: 'На рынке' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-900 mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-sky-700 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sky-600 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
