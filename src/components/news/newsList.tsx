/* eslint-disable @next/next/no-img-element */
import { useNewsState } from '@/store/newsContext';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'flowbite-react';
import { Headline } from '@/types/globalTypes';

const NewsList = () => {
  const { headlines } = useNewsState();
  console.log('ini adlahal headlines list : ', headlines);

  return (
    <div>
      <article className='mx-auto mb-10 mt-6 min-h-40 px-6 md:my-12 lg:px-12 xl:px-24'>
        <div className=''>
          <div className='text-center'>
            <h2 className='mb-4 mt-1 text-3xl font-bold text-gray-900 md:text-4xl'>Rekomendasi Artikel</h2>
            <p className='mx-auto text-sm text-[#637381] md:w-3/4 md:text-base xl:w-1/2'>Temukan artikel-artikel pilihan kami Dari Berbagai Negara.</p>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-12'>
            <div className='main'>
              {headlines[0] && headlines[0].urlToImage && (
                <Link href={`/artikel/${encodeURIComponent(headlines[0].title)}`}>
                  <Card className='h-full border-2 border-gray-200 p-1'>
                    <div className='relative h-[250px] w-full sm:h-[300px] lg:h-[350px] xl:h-[400px]'>
                      <img src={headlines[0].urlToImage} alt='gambar artikel' className='object-cover' style={{ width: '100%', height: '100%' }} sizes='(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw' />
                    </div>

                    <h3 className='hover:text-primary-2 line-clamp-2 text-xl font-bold leading-snug duration-500'>{headlines[0].title}</h3>
                    <p className='text-primary-3 line-clamp-3 text-sm'>{headlines[0].description}</p>
                  </Card>
                </Link>
              )}
            </div>
            <div className='aside flex flex-col space-y-4'>
              {headlines.slice(1).map(
                (headlineItem: Headline, k: number) =>
                  headlineItem.urlToImage && (
                    <Link href={`/artikel/${headlineItem.title}`} key={k}>
                      <Card className='border-2 border-gray-200 p-1'>
                        <div className='flex flex-col md:flex-row md:space-x-3'>
                          <div className='relative h-[250px] w-full bg-red-300 md:h-[130px] md:w-[40%] xl:h-[150px]'>
                            <img src={headlineItem.urlToImage} alt='gambar artikel' style={{ width: '100%', height: '100%' }} className='object-cover' />
                          </div>

                          <div className='mt-5 md:mt-0 md:w-[60%]'>
                            <h3 className='hover:text-primary-2 line-clamp-2 text-xl font-bold leading-snug duration-500'>{headlineItem.title}</h3>
                            <p className='mt-4 line-clamp-3 text-sm text-[#637381]'>{headlineItem.description}</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsList;
