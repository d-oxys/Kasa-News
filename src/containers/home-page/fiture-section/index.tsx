'use client';

import { fitur } from '@/contents/content';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main>
      <section className='bg-primary pb-16'>
        <div className='flex justify-end'>
          <Image src={'/asset/batik-icon.svg'} width={600} height={100} alt='batik-image' />
        </div>
        <div className='mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-20 px-4 py-8 md:flex-row md:gap-0 '>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              y: { duration: 0.5 },
            }}
          >
            <Image src={'/asset/newsapi.png'} width={400} height={800} alt='fitur-image' />
          </motion.div>
          <div className='fitur'>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                y: { duration: 0.5 },
              }}
              className='flex flex-col gap-8'
            >
              {fitur.map(({ name, icon }) => (
                <li className='flex items-center gap-4' key={name}>
                  <div className='rounded-md bg-white px-3 py-2 text-2xl'>{icon}</div>
                  <p className='text-xl font-medium text-white'>{name}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </main>
  );
}
