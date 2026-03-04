
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Users, Fuel } from 'lucide-react';

interface CatalogProps {
  title?: string;
  subtitle?: string;
}

export const Catalog: React.FC<CatalogProps> = ({
  title = 'Наш каталог',
  subtitle = 'Выберите катер своей мечты из нашей эксклюзивной коллекции'
}) => {
  const boats = [
    {
      id: 'boat-1',
      name: 'Speedster 450',
      price: '4 500 000 ₽',
      image: 'https://images.pexels.com/photos/1102222/pexels-photo-1102222.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '85 км/ч',
      capacity: '6 человек',
      fuel: '250 л',
      tag: 'Хит продаж',
    },
    {
      id: 'boat-2',
      name: 'Ocean Master 520',
      price: '7 200 000 ₽',
      image: 'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '75 км/ч',
      capacity: '8 человек',
      fuel: '350 л',
      tag: 'Премиум',
    },
    {
      id: 'boat-3',
      name: 'Family Cruiser 380',
      price: '3 100 000 ₽',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '65 км/ч',
      capacity: '10 человек',
      fuel: '200 л',
      tag: 'Семейный',
    },
    {
      id: 'boat-4',
      name: 'Sport GT 600',
      price: '12 500 000 ₽',
      image: 'https://images.pexels.com/photos/3250440/pexels-photo-3250440.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '110 км/ч',
      capacity: '4 человека',
      fuel: '400 л',
      tag: 'Спорт',
    },
    {
      id: 'boat-5',
      name: 'Fisher Pro 420',
      price: '2 800 000 ₽',
      image: 'https://images.pexels.com/photos/1528894/pexels-photo-1528894.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '55 км/ч',
      capacity: '5 человек',
      fuel: '180 л',
      tag: 'Для рыбалки',
    },
    {
      id: 'boat-6',
      name: 'Luxury Liner 750',
      price: '25 000 000 ₽',
      image: 'https://images.pexels.com/photos/1577934/pexels-photo-1577934.jpeg?auto=compress&cs=tinysrgb&w=600',
      speed: '45 км/ч',
      capacity: '12 человек',
      fuel: '600 л',
      tag: 'Люкс',
    },
  ];

  return (
    <section id="catalog" className="py-16 sm:py-20 lg:py-24 bg-white/50">
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
          {boats.map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-xl shadow-cyan-500/10 overflow-hidden border border-cyan-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {boat.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-900 mb-2">
                  {boat.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                  {boat.price}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5 sm:mb-6">
                  <div className="flex flex-col items-center p-2 sm:p-3 bg-cyan-50 rounded-xl">
                    <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mb-1" />
                    <span className="text-xs sm:text-sm text-sky-700">{boat.speed}</span>
                  </div>
                  <div className="flex flex-col items-center p-2 sm:p-3 bg-cyan-50 rounded-xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mb-1" />
                    <span className="text-xs sm:text-sm text-sky-700">{boat.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center p-2 sm:p-3 bg-cyan-50 rounded-xl">
                    <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mb-1" />
                    <span className="text-xs sm:text-sm text-sky-700">{boat.fuel}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
