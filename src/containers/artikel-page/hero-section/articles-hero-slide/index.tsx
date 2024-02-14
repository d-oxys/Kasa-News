'use client';
import styles from './style.module.scss';
import React, { FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { SlideArrow } from '@/components/icons/slideArrow';
import Image from 'next/image';
import ArticleSlide from './slide';
import { useNewsState, useNewsDispatch } from '@/store/newsContext';
import { fetchEverything } from '@/actions/news';

interface ArticlesHeroSlideProps {}

const ArticlesHeroSlide: FC<ArticlesHeroSlideProps> = ({}) => {
  const swiperRef = useRef<any>(null);
  const dispatch = useNewsDispatch();
  const { everything } = useNewsState();

  useEffect(() => {
    fetchEverything(dispatch, 'technology', 'SET_EVERYTHING');
  }, [dispatch]);

  if (everything.length === 0) {
    return null;
  }

  return (
    <div className='mx-10'>
      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} className='relative flex w-full flex-col items-center justify-center overflow-y-visible'>
        {everything.map((headline, index) => (
          <SwiperSlide key={index} className='relative w-full '>
            <ArticleSlide headline={headline} />
          </SwiperSlide>
        ))}
        <button onClick={() => swiperRef.current.slidePrev()} className='absolute  bottom-[50%] left-12 top-[50%] z-10 hidden h-[52px] w-[52px] items-center justify-center rounded-full bg-[#15141199] text-black backdrop-blur md:flex'>
          <SlideArrow />
        </button>
        <button onClick={() => swiperRef.current.slideNext()} className='absolute  bottom-[50%] right-12 top-[50%] z-10 hidden h-[52px] w-[52px] items-center justify-center rounded-full  bg-[#15141199] text-black backdrop-blur md:flex'>
          <SlideArrow className='rotate-180 ' />
        </button>
      </Swiper>
    </div>
  );
};

export default ArticlesHeroSlide;
