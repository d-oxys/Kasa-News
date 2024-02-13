'use client';
import { useEffect } from 'react';
import { useNewsDispatch } from '@/store/newsContext';
import { fetchTopHeadlines } from '@/actions/news';
import NewsList from '@/components/news/newsList';

const HeadlineSection = () => {
  const dispatch = useNewsDispatch();

  useEffect(() => {
    fetchTopHeadlines(dispatch);
  }, [dispatch]);

  return (
    <div>
      <NewsList />
    </div>
  );
};

export default HeadlineSection;
