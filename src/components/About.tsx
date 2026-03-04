
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ship, Users, Award } from 'lucide-react';

interface AboutProps {
  title?: string;
  description?: string;
  yearsCount?: string;
  boatsCount?: string;
  clientsCount?: string;
}

export function About({
  title = 'О компании Aquamarine',
  description = 'Мы — официальный дилер ведущих мировых верфей',
  yearsCount = '15+',
  boatsCount = '500+',
  clientsCount = '1200+'
}: AboutProps) {
  const stats = [
    { icon: Calendar, value: yearsCount, label: 'Лет на рынке' },
    { icon: Ship, value: boatsCount, label: 'Продано катеров' },
    { icon: Users, value: clientsCount, label: 'Довольных клиентов' },
    { icon: Award, value: '10+', label: 'Брендов-партнёров' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our showroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl shadow-xl shadow-cyan-500/20"
            >
              <p className="text-white text-4xl font-bold">{yearsCount}</p>
              <p className="text-cyan-100 text-sm">лет опыта</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bg-slate-800/50 rounded-xl border border-white/5"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
