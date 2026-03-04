
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, CreditCard, Headphones, Truck, Award } from 'lucide-react';

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

export const Features: React.FC<FeaturesProps> = ({
  title = 'Почему выбирают нас',
  subtitle = 'Мы предоставляем полный комплекс услуг для вашего комфорта'
}) => {
  const features = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Официальная гарантия до 5 лет на все катера от производителя',
    },
    {
      icon: Wrench,
      title: 'Сервисное обслуживание',
      description: 'Собственный сервисный центр с опытными механиками',
    },
    {
      icon: CreditCard,
      title: 'Выгодные условия',
      description: 'Рассрочка 0% и кредитование от ведущих банков',
    },
    {
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Консультация и техподдержка в любое время',
    },
    {
      icon: Truck,
      title: 'Доставка по России',
      description: 'Бесплатная доставка до ближайшего водоёма',
    },
    {
      icon: Award,
      title: 'Сертификация',
      description: 'Все катера сертифицированы по международным стандартам',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24">
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
          <p className="text-lg sm:text-xl text-sky-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-sky-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sky-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
