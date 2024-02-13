import { searchHandler } from '@/actions/search';
import PrimaryButton from '@/components/buttons/primaryButton';
import { Search } from '@/components/icons/search';
import React, { FC } from 'react';

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  return (
    <form action={searchHandler}>
      <div className='flex w-full items-center gap-4 rounded-lg bg-white p-2 md:p-4' style={{ boxShadow: ' 0px 4px 140px 0px rgba(175, 173, 181, 0.20)' }}>
        <Search />
        <input type='text' name='searchKey' placeholder='Search for a product' className='h-full w-full border-none text-black outline-none' />
        <PrimaryButton text='Search' />
      </div>
    </form>
  );
};

export default SearchInput;
