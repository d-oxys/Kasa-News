import React, { FC } from 'react';
import ArticlesHeroSlide from './articles-hero-slide';

interface ArticlesHeroSectionProps {}

const ArticlesHeroSection: FC<ArticlesHeroSectionProps> = ({}) => {
  return (
    <section className='flex w-full justify-center'>
      <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-20 md:py-28 '>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-2xl font-bold text-black md:text-6xl'>Articles</h1>
          <p className='text-textColor w-full text-sm md:w-[600px] md:text-lg'>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
        </div>
        <div className='h-[300px] w-full md:h-[550px] xl:h-[820px]'>
          <ArticlesHeroSlide />
        </div>
      </div>
    </section>
  );
};

export default ArticlesHeroSection;
