
import type { Config } from '@puckeditor/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedBoats } from './components/FeaturedBoats';
import { Features } from './components/Features';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const config: Config = {
  components: {
    Header: {
      fields: {
        logo: { type: 'text', label: 'Логотип / Название бренда' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
      },
      render: Header,
    },
    Hero: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст кнопки' },
        backgroundImage: { type: 'text', label: 'URL фонового изображения' },
      },
      render: Hero,
    },
    FeaturedBoats: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
      },
      render: FeaturedBoats,
    },
    Features: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
      },
      render: Features,
    },
    About: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        description: { type: 'textarea', label: 'Описание компании' },
        yearsCount: { type: 'text', label: 'Лет на рынке' },
        boatsCount: { type: 'text', label: 'Продано катеров' },
        clientsCount: { type: 'text', label: 'Довольных клиентов' },
      },
      render: About,
    },
    Contact: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        address: { type: 'textarea', label: 'Адрес' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
        workingHours: { type: 'text', label: 'Часы работы' },
      },
      render: Contact,
    },
    Footer: {
      fields: {
        companyName: { type: 'text', label: 'Название компании' },
        tagline: { type: 'text', label: 'Слоган' },
      },
      render: Footer,
    },
  },
};
