import SearchInput from '@/components/forms/input/search';
import React, { FC } from 'react';

interface SearchSectionProps {
  message?: string;
}

const SearchSection: FC<SearchSectionProps> = ({ message }) => {
  return (
    <>
      <section className='flex w-full justify-center'>
        <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-2xl font-bold text-black md:text-6xl'>Search</h1>
            <p className='text-textColor w-full text-sm md:w-[505px] md:text-lg'>The product crafted by talented crafter and using high quality material with love inside</p>
          </div>
          <div className='w-full'>
            <SearchInput />
          </div>
        </div>
      </section>
      <section className='flex w-full justify-center'>
        <div className='mx-5 flex w-full max-w-screen-xl flex-col  items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-2xl font-bold text-black md:text-6xl'>{`Hasil Untuk "${message}"`}</h1>
            <span className='text-2x text-secondaryColor font-bold'>{`Artikel "${message}" tidak di temukan`}, coba cari artikel Tesla</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSection;
