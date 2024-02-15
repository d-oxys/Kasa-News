/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useNewsState, useNewsDispatch } from '@/store/newsContext';
import Fail from '../search-section';
import { fetchSearchResults } from '@/actions/news';

const NewsDetail = () => {
  const pathname = usePathname();
  const dispatch = useNewsDispatch();
  const { searchResults } = useNewsState();
  const [titleParam, setTitleParam] = useState<string | undefined>();

  useEffect(() => {
    const titleFromPathname = decodeURIComponent(pathname.split('/')[2] || '');
    setTitleParam(titleFromPathname);
    console.log(titleFromPathname);
  }, [pathname]);

  useEffect(() => {
    if (titleParam) {
      fetchSearchResults(dispatch, titleParam);
    }
  }, [dispatch, titleParam]);

  console.log(titleParam);

  if (searchResults.length === 0) {
    return <Fail message={` ${titleParam} `} />;
  }

  return (
    <div>
      <section className='flex w-full justify-center'>
        <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28'>
          <div className='flex w-full flex-wrap justify-between gap-6'>
            <div className='flex w-full flex-wrap justify-between gap-6'>
              {searchResults.map((result, index) => (
                <div key={index}>
                  <div className='flex w-max flex-col gap-5 md:gap-7'>
                    <Link href={`url`} className=''>
                      <img src={result.urlToImage} style={{ objectFit: 'cover', width: '394', height: '360' }} className='h-[130px] w-[156px] sm:h-[194px] sm:w-[220px] md:h-[360px] md:w-[394px]' alt='Product IMG' />
                    </Link>
                    <div className='flex flex-col gap-3 md:gap-4'>
                      <h2 className='text-textColor text-xs font-bold md:text-lg'>{result.author.length > 20 ? `${result.author.substring(0, 20)}...` : result.title}</h2>
                      <div>
                        <Link href={`url}`} className='text-xs font-bold text-black md:text-2xl'>
                          {result.title.length > 20 ? `${result.title.substring(0, 20)}...` : result.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default NewsDetail;
