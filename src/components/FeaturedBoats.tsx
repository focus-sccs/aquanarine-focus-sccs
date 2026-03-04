
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Users, Gauge, ArrowRight, Heart } from 'lucide-react';

interface FeaturedBoatsProps {
  title?: string;
  subtitle?: string;
}

const boats = [
  {
    id: 1,
    name: 'Azure 450 GT',
    price: '12 500 000 ₽',
    image: 'https://images.pexels.com/photos/110029/pexels-photo-110029.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { length: '14.5 м', capacity: '12 чел', speed: '45 узлов', fuel: '800 л' },
    badge: 'Хит продаж',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 2,
    name: 'Marina Sport 380',
    price: '8 900 000 ₽',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { length: '11.8 м', capacity: '8 чел', speed: '52 узла', fuel: '600 л' },
    badge: 'Новинка',
    badgeColor: 'bg-cyan-500',
  },
  {
    id: 3,
    name: 'Ocean Master 520',
    price: '24 900 000 ₽',
    image: 'https://images.pexels.com/photos/3259905/pexels-photo-3259905.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { length: '16.2 м', capacity: '16 чел', speed: '38 узлов', fuel: '1200 л' },
    badge: 'Премиум',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Coastal Cruiser 320',
    price: '6 200 000 ₽',
    image: 'https://images.pexels.com/photos/1527703/pexels-photo-1527703.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { length: '9.8 м', capacity: '6 чел', speed: '35 узлов', fuel: '400 л' },
    badge: null,
    badgeColor: '',
  },
];

export function FeaturedBoats({ title = 'Популярные модели', subtitle = 'Выберите идеальный катер из нашей коллекции' }: FeaturedBoatsProps) {
  return (
    <section id="catalog" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                
                {boat.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 ${boat.badgeColor} text-white text-xs font-semibold rounded-full`}>
                    {boat.badge}
                  </span>
                )}
                
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{boat.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-4">{boat.price}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Gauge className="w-4 h-4 text-cyan-500" />
                    <span>{boat.specs.speed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4 text-cyan-500" />
                    <span>{boat.specs.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Fuel className="w-4 h-4 text-cyan-500" />
                    <span>{boat.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-cyan-500">📏</span>
                    <span>{boat.specs.length}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500/20 transition-colors group/btn">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
            Смотреть весь каталог
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
