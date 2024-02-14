'use client';
import { useEffect } from 'react';
import { useNewsDispatch, useNewsState } from '@/store/newsContext';
import { fetchEverything } from '@/actions/news';
import NewsDetail from '@/components/news/newsDetail';

const MainSection = () => {
  const dispatch = useNewsDispatch();
  const { everything } = useNewsState();

  useEffect(() => {
    fetchEverything(dispatch, 'apple');
  }, [dispatch]);

  return (
    <div>
      {everything.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt='gambar artikel' className='object-cover' sizes='(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw' />
        </div>
      ))}
    </div>
  );
};

export default MainSection;
