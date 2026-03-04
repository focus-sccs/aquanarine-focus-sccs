
import React from 'react';
import { Anchor, Facebook, Instagram, Youtube, Send } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  tagline?: string;
}

export function Footer({ companyName = 'AQUAMARINE', tagline = 'Ваши мечты на воде' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    catalog: [
      { label: 'Моторные катера', href: '#' },
      { label: 'Яхты', href: '#' },
      { label: 'Спортивные лодки', href: '#' },
      { label: 'Электро-катера', href: '#' },
    ],
    company: [
      { label: 'О компании', href: '#about' },
      { label: 'Сервис', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Блог', href: '#' },
    ],
    support: [
      { label: 'Контакты', href: '#contacts' },
      { label: 'FAQ', href: '#' },
      { label: 'Доставка', href: '#' },
      { label: 'Гарантия', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider">{companyName}</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">{tagline}. Продажа и сервис премиальных катеров от ведущих мировых производителей.</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Каталог</h4>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
