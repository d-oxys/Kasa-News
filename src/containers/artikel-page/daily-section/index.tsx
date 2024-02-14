import ArticleCard from '@/components/artikel/artikelCard';
import { useNewsState, useNewsDispatch } from '@/store/newsContext';
import { fetchEverything, fetchTopHeadlines } from '@/actions/news';
import React, { FC, useEffect } from 'react';

interface ArticlesDailySectionProps {}

const ArticlesDailySection: FC<ArticlesDailySectionProps> = ({}) => {
  const dispatch = useNewsDispatch();
  const { headlines } = useNewsState();

  useEffect(() => {
    fetchTopHeadlines(dispatch);
  }, [dispatch]);

  if (headlines.length === 0) {
    return null;
  }

  return (
    <section className='flex w-full justify-center'>
      <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28 '>
        <div className='flex w-full flex-col gap-2 md:gap-4'>
          <h1 className='text-primary text-sm font-bold md:text-lg'>Daily News</h1>
          <h2 className='text-2xl font-bold text-black md:text-5xl'>Today top headlines</h2>
        </div>
        <div className='flex w-full flex-col justify-between gap-4 xl:flex-row'>
          {headlines.map((el, _i) => (
            <ArticleCard key={_i} secondary id={el.source.id} content={el.description} title={el.title} category={el.source.name} author={el.author} imgUrl={el.urlToImage} date={el.publishedAt} url={el.url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesDailySection;
