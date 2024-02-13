import SearchInput from '@/components/forms/input/search';
import { SkectchStar, SketchArrow } from '@/components/icons/sketchs';
import Image from 'next/image';
import React, { FC } from 'react';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className='flex w-full justify-center'>
      <div className=' mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28'>
        <div className='flex w-full flex-col items-center gap-8 text-center md:max-w-[800px]'>
          <div className='relative flex'>
            <h1 className='text-2xl font-bold capitalize text-black md:text-6xl'>Temukan Informasi Dan Berita Yang Menarik</h1>
            <SkectchStar className='h-6 w-6 md:h-[40px] md:w-[40px] lg:h-[51px] lg:w-[51px]' />
            <SketchArrow className='absolute -bottom-10 -left-10 h-[83px] w-[83px] lg:-bottom-60  lg:-left-40 lg:h-[249px]  lg:w-[249px]' />
          </div>
          <div>
            <p className='text-textColor text-sm md:text-lg'>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
            </p>
          </div>
        </div>
        <div className='relative flex w-full flex-col items-center justify-center gap-8'>
          <div className='top-[-2.5rem] z-10 h-[48px] w-full  md:absolute md:max-w-[810px]'>
            <SearchInput />
          </div>
          <div className='relative h-[160px] w-full  overflow-hidden border-black md:h-[480px]'>
            <Image className='rounded-lg object-cover' src={'/hero.png'} fill alt='Hero IMG' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
