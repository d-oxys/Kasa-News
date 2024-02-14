/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface ArticleSlideProps {
  headline: {
    title: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
  };
}

const ArticleSlide: FC<ArticleSlideProps> = ({ headline }) => {
  return (
    <div className='relative flex h-[200px] w-full justify-center overflow-visible md:h-[550px]'>
      <img src={headline.urlToImage} alt='Lalasia Banner' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      <div className='linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) absolute h-full w-full bg-gradient-to-t from-[#15141175] to-[transparent]' />
      <div className='absolute -bottom-[5%] h-[133px] w-[80%] overflow-y-visible bg-white shadow-sm shadow-black md:-bottom-[1%] lg:-bottom-[10px] lg:h-[200px] ' style={{ boxShadow: ' 0px 4px 80px 0px rgba(175, 173, 181, 0.20) ' }}>
        <div className='flex h-full w-full flex-col justify-center gap-4 px-3 lg:px-10'>
          <div className='flex w-[80%] flex-col gap-2'>
            <h1 className='text-xs font-bold text-black lg:text-2xl'>{headline.title}</h1>
          </div>
          <div className='flex w-full items-center gap-4'>
            <div className='flex items-center gap-2'>
              <h3 className='text-xs font-bold text-black lg:text-sm'>By {headline.author}</h3>
            </div>
            <span className='text-textColor text-xs lg:text-sm'>{headline.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSlide;
