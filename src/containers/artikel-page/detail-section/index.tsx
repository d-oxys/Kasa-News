'use client';
import { useEffect } from 'react';
import { useNewsDispatch } from '@/store/newsContext';
import { fetchTopHeadlines } from '@/actions/news';
import NewsDetail from '@/components/news/newsDetail';

const DetailSection = () => {
  const dispatch = useNewsDispatch();

  useEffect(() => {
    fetchTopHeadlines(dispatch);
  }, [dispatch]);

  return (
    <div>
      <NewsDetail />
    </div>
  );
};

export default DetailSection;
