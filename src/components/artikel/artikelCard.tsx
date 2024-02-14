/* eslint-disable @next/next/no-img-element */
import { AuthorType } from '@/types/globalTypes';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ArticleCardProps {
  horizontal?: boolean;
  responsive?: boolean;
  secondary?: boolean;

  id: number;
  category: string;
  imgUrl: string;
  url: string;
  title: string;
  content: string;
  author: string;
  date: Date;
}

const ArticleCard: FC<ArticleCardProps> = ({ horizontal, responsive, secondary, id, url, title, content, author, date, category, imgUrl }) => {
  if (secondary) {
    return (
      <div className='flex w-full max-w-full flex-col gap-5 md:gap-7 xl:w-[605px]'>
        <Link href={`/artikel/${title}`} className=''>
          <img src={imgUrl} width={394} height={340} className='h-[180px] !w-full object-cover md:h-[250px] xl:h-[340px]' alt='Product IMG' />
        </Link>
        <div className='flex flex-col gap-3 md:gap-4'>
          <h2 className='text-textColor w-max text-xs md:text-lg'>{category}</h2>
          <div className='flex flex-col gap-3'>
            <Link href={`/artikel/${title}`} className='line-clamp-1 text-xs font-bold text-black md:text-2xl'>
              {title}
            </Link>
            <p className='text-textColor line-clamp-2 text-xs  md:w-full md:text-lg'>{content}</p>
          </div>
          <div className='flex w-max  items-center gap-6'>
            <div className='flex items-center gap-[10px]'>
              <h3 className='text-xs font-bold text-black md:text-sm'>{author}</h3>
            </div>
            <div>
              <p className='text-textColor flex text-xs md:text-sm'>{new Date(date).toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (horizontal) {
    return (
      <div className='flex w-full gap-3 bg-white md:gap-7'>
        <div className='h-max w-max'>
          <img src={imgUrl} width={260} height={260} className='h-[110px]  !min-h-[110px]  w-[110px] !min-w-[110px] transition-all ease-in-out hover:scale-110 md:!min-h-[260px] md:!min-w-[260px] ' alt='Article Cover' />
        </div>
        <div className='flex w-[203px] flex-col justify-center gap-2 md:w-[329px] md:gap-5' style={responsive ? { width: '100%', height: '100%' } : {}}>
          <div>
            <h2 className='text-textColor text-xs md:text-base lg:text-lg'>{category}</h2>
          </div>
          <div>
            <h1 className='line-clamp-2 text-base font-bold text-black lg:text-2xl'>{title}</h1>
          </div>
          <div className='hidden md:flex'>
            <p className='text-textColor md:text-xs lg:text-lg'>{content}</p>
          </div>
          <div className='flex w-max  items-center gap-6'>
            <div className='flex items-center gap-[10px]'>
              <h3 className='text-xs font-bold text-black md:text-sm'>{author}</h3>
            </div>
            <div>
              <p className='text-textColor hidden md:flex md:text-sm'>{new Date(date).toDateString()}</p>
            </div>
            <Link href={url} target='_blank'>
              <div className='text-paragraph hover:text-primary-2 flex items-center gap-x-2 duration-500'>
                Baca Lebih Banyak <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='relative  h-[200px] w-full md:h-[565px] '>
      <div className='relative h-full w-full'>
        <img src={imgUrl} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt='Article IMG' />
        <div className='linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) absolute h-full w-full bg-gradient-to-t from-[#15141175] to-[transparent]' />
        <div className='relative flex h-full w-full max-w-[530px] flex-col justify-end  gap-3 p-6'>
          <div>
            <h2 className=' text-xs md:text-lg'>{category}</h2>
          </div>
          <div>
            <h1 className='text-base font-bold md:text-2xl'>{title}</h1>
          </div>
          <div>
            <p className='truncate text-ellipsis text-lg text-white'>{content}</p>
          </div>
          <div>
            <p className='truncate text-ellipsis text-lg font-bold text-white'>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
