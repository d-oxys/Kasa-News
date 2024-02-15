'use client';
import SearchSection from '@/containers/search-page/main-section';
import { NewsProvider } from '@/store/newsContext';

export default function Home() {
  return (
    <main>
      <NewsProvider>
        <SearchSection />
      </NewsProvider>
    </main>
  );
}
