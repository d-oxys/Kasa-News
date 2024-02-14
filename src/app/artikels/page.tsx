'use client';
import MainSection from '@/containers/artikel-page/main-section';
import HeroSection from '@/containers/artikel-page/hero-section';
import DailySection from '@/containers/artikel-page/daily-section';
import TrendingSection from '@/containers/artikel-page/trending-section';
import { NewsProvider } from '@/store/newsContext';

export default function Home() {
  return (
    <main className=''>
      <NewsProvider>
        {/* <MainSection /> */}
        <HeroSection />
        <DailySection />
        <TrendingSection />
      </NewsProvider>
    </main>
  );
}
