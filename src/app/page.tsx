'use client';
import HeroSection from '@/containers/home-page/hero-section';
import FitureSection from '@/containers/home-page/fiture-section';
import HeadlineSection from '@/containers/home-page/headlines-section';
import { NewsProvider } from '@/store/newsContext';

export default function Home() {
  return (
    <main>
      <NewsProvider>
        <HeroSection />
        <FitureSection />
        <HeadlineSection />
      </NewsProvider>
    </main>
  );
}
