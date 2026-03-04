
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Headphones, CreditCard, Wrench, Ship } from 'lucide-react';

interface FeaturesProps {
  title?: string;
}

const features = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Официальная гарантия от производителя до 5 лет на все катера',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Award,
    title: 'Сертифицированные дилеры',
    description: 'Мы являемся официальным представителем ведущих мировых верфей',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная техническая поддержка и консультации экспертов',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: CreditCard,
    title: 'Гибкое финансирование',
    description: 'Лизинг и кредитование на выгодных условиях от партнёрских банков',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Сервисное обслуживание',
    description: 'Полный спектр услуг: от регламентных работ до капитального ремонта',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Ship,
    title: 'Доставка по России',
    description: 'Доставка катера в любую точку страны специализированным транспортом',
    color: 'from-blue-500 to-indigo-500',
  },
];

export function Features({ title = 'Почему выбирают нас' }: FeaturesProps) {
  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
