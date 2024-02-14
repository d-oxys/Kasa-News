import PrimaryButton from '@/components/buttons/primaryButton';
import ArticleCard from '@/components/artikel/artikelCard';
import React, { FC, useState, useEffect } from 'react';
import { articleFilters } from './constants';
import FilterButton from '@/components/buttons/FilterButton';
import { ArticleFilter, ArticlesByFilter } from '@/types/newsTypes';
import { useNewsState, useNewsDispatch } from '@/store/newsContext';
import { fetchEverything, fetchArticlesByFilter } from '@/actions/news';
interface ArticlesTrendingSectionProps {}

const ArticlesTrendingSection: FC<ArticlesTrendingSectionProps> = ({}) => {
  const [activeFilter, setActiveFilter] = useState<ArticleFilter>('All');
  const dispatch = useNewsDispatch();
  const { articlesByFilter } = useNewsState();

  useEffect(() => {
    fetchArticlesByFilter(dispatch, 'anime', 'SET_ARTICLES_BY_FILTER');
  }, [dispatch]);

  if ((articlesByFilter ?? []).length === 0) {
    return null;
  }

  return (
    <section className='flex w-full justify-center'>
      <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28 '>
        <div className='flex w-full flex-col gap-2 md:gap-4'>
          <h1 className='text-secondaryColor text-sm font-bold md:text-lg'>Trending Topics</h1>
          <h2 className='text-2xl font-bold text-black md:text-5xl'>Popular last week</h2>
        </div>
        <div className='flex w-full flex-col gap-7'>
          {articlesByFilter.map((el, _i) => (
            <ArticleCard key={_i} horizontal responsive id={el.id} author={el.author} title={el.title} content={el.content} category={el.category} date={el.date} imgUrl={el.urlToImage} url={el.url} />
          ))}
        </div>
        <div>
          <PrimaryButton text='Load More' className='border bg-white font-bold !text-black' />
        </div>
      </div>
    </section>
  );
};

export default ArticlesTrendingSection;
