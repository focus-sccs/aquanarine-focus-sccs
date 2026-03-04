
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  logo?: string;
  phone?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo = 'AquaMarine',
  phone = '+7 (800) 555-35-35'
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'О нас', href: '#about' },
    { label: 'Каталог', href: '#catalog' },
    { label: 'Преимущества', href: '#features' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 glass shadow-lg shadow-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">{logo}</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sky-800 hover:text-cyan-600 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <motion.a
              href={`tel:${phone}`}
              className="hidden sm:flex items-center gap-2 text-sky-800 hover:text-cyan-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </motion.a>

            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать звонок
            </motion.button>

            <button
              className="md:hidden p-2 text-sky-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-cyan-200/50 mt-2 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sky-800 hover:text-cyan-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 py-2 text-sky-800 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
