
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export const Contact: React.FC<ContactProps> = ({
  title = 'Свяжитесь с нами',
  subtitle = 'Мы всегда рады ответить на ваши вопросы',
  address = 'г. Москва, Причал Северный',
  phone = '+7 (800) 555-35-35',
  email = 'info@aquamarine.ru'
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white/50">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl shadow-cyan-500/10 border border-cyan-100"
          >
            <h3 className="text-2xl font-bold text-sky-900 mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sky-700 font-medium mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label className="block text-sky-700 font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              <div>
                <label className="block text-sky-700 font-medium mb-2">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none bg-white"
                  placeholder="Ваш вопрос или комментарий..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                <Send className="w-5 h-5" />
                Отправить заявку
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sky-900 mb-1">Адрес</h4>
                  <p className="text-sky-600">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sky-900 mb-1">Телефон</h4>
                  <a href={`tel:${phone}`} className="text-cyan-600 hover:text-cyan-700 font-medium">
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sky-900 mb-1">Email</h4>
                  <a href={`mailto:${email}`} className="text-cyan-600 hover:text-cyan-700 font-medium">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-cyan-500/10 border border-cyan-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sky-900 mb-1">Режим работы</h4>
                  <p className="text-sky-600">Пн-Вс: 9:00 - 20:00</p>
                  <p className="text-sky-500 text-sm">Без выходных</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
