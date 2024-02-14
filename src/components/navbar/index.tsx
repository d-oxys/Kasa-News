/* eslint-disable @next/next/no-img-element */
'use client';

import { getCookie, deleteCookie, hasCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { UserData } from '@/types/globalTypes';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = getCookie('accessToken');

    setIsLoading(true);
    const fetchData = async () => {
      if (token) {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/users', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'appliscation/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const fetchedData = await response.json();
          setUserData(fetchedData.data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    setUserData(null);
    router.push('/');
  };

  return (
    <header className='sticky top-0 z-20 border-b bg-white'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between p-4'>
        <div className='logo'>
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={60} height={43} alt='Logo Kasa Talk' className='' />
          </Link>
        </div>
        <div className='menu'>
          <ul
            className={`fixed right-0 mt-[2.38rem] flex h-full w-[50%] flex-col gap-9 border border-r-0 border-t-0 bg-white p-6 ease-in-out max-[500px]:w-full md:static md:z-0 md:mt-0 md:h-auto md:w-auto md:flex-row md:gap-16 md:border-none md:p-0 lg:transition-none  ${
              isOpen ? 'right-0 duration-500' : 'right-[-100%] duration-500'
            }`}
          >
            {menu.map(({ label, link }) => (
              <li key={label} className={`text-base font-medium text-black ${pathname === link ? 'text-primary font-semibold' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <Link href={link} className='hover:text-primary'>
                  {label}
                </Link>
              </li>
            ))}
            {!userData && (
              <Link href='/login' className='btn block py-2 text-center md:hidden' onClick={() => setIsOpen(!isOpen)}>
                Masuk
              </Link>
            )}
          </ul>
        </div>

        <div className='flex gap-6'>
          {isLoading ? (
            <div className='animate-pulse'>
              <div className='w-[7.5rem] rounded-full px-8 py-5 md:bg-[#F3F4F6]'></div>
            </div>
          ) : (
            <div>
              <Link href={'/login'} className='btn hidden justify-center px-8 py-2 md:flex '>
                Masuk
              </Link>
            </div>
          )}
          <button className='block text-2xl md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </nav>
    </header>
  );
}

const menu = [
  {
    label: 'Beranda',
    link: '/',
  },
  {
    label: 'Artikel',
    link: '/artikels',
  },
  {
    label: 'Tentang',
    link: '/tentang',
  },
];
