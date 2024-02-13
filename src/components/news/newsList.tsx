import { useNewsState } from '@/store/newsContext';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'flowbite-react';
import { Headline } from '@/types/globalTypes';

const NewsList = () => {
  const { headlines } = useNewsState();

  return (
    <div>
      <article className='mx-auto mb-10 mt-6 px-6 md:my-12 lg:px-12 xl:px-24'>
        <div className=''>
          <div className='text-center'>
            <h2 className='mb-4 mt-1 text-3xl font-bold text-gray-900 md:text-4xl'>Rekomendasi Artikel</h2>
            <p className='mx-auto text-sm text-[#637381] md:w-3/4 md:text-base xl:w-1/2'>Temukan artikel-artikel pilihan kami Dari Berbagai Negara.</p>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-12'>
            <div className='main'>
              {headlines[1] && (
                <Link href={`/artikel/${headlines[1].title}`}>
                  <Card className='h-full border-2 border-gray-200 p-1'>
                    <div className='relative h-[250px] w-full sm:h-[300px] lg:h-[350px] xl:h-[400px]'>
                      <Image src={headlines[1].urlToImage} alt='gambar artikel' fill className='object-cover' sizes='(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw' />
                    </div>

                    <h3 className='hover:text-primary-2 line-clamp-2 text-xl font-bold leading-snug duration-500'>{headlines[1].title}</h3>
                    <p className='text-primary-3 line-clamp-3 text-sm'>{headlines[1].description}</p>
                  </Card>
                </Link>
              )}
            </div>
            <div className='aside flex flex-col space-y-4'>
              {headlines.slice(2).map((headlineItem: Headline, k: number) => (
                <Link href={`/artikel/${headlineItem.title}`} key={k}>
                  <Card className='border-2 border-gray-200 p-1'>
                    <div className='flex flex-col md:flex-row md:space-x-3'>
                      <div className='relative h-[250px] w-full bg-red-300 md:h-[130px] md:w-[40%] xl:h-[150px]'>
                        <Image src={headlineItem.urlToImage} alt='gambar artikel' sizes='(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw' fill className='object-cover' />
                      </div>

                      <div className='mt-5 md:mt-0 md:w-[60%]'>
                        <h3 className='hover:text-primary-2 line-clamp-2 text-xl font-bold leading-snug duration-500'>{headlineItem.title}</h3>
                        <p className='mt-4 line-clamp-3 text-sm text-[#637381]'>{headlineItem.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsList;
