import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen } from 'lucide-react';
import styles from '@styles/Home.module.css';

const stats = [
  { id: 1, name: 'Personas Ayudadas', value: '500+', icon: Users },
  { id: 2, name: 'Años de Experiencia', value: '10+', icon: Heart },
  { id: 3, name: 'Programas Activos', value: '5', icon: BookOpen },
];

const Statistics = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Nuestro Impacto
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Trabajamos incansablemente para hacer una diferencia en la vida de las personas.
        </p>
      </motion.div>

      <div className={styles.statContainer}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
            >
              <Icon className={`h-12 w-12 ${styles.statIcon} mb-4`} />
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900 mt-2">{stat.value}</dd>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
