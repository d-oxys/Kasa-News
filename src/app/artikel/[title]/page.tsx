'use client';
import DetailSection from '@/containers/artikel-page/detail-section';
import { NewsProvider } from '@/store/newsContext';

export default function Home() {
  return (
    <main>
      <NewsProvider>
        <DetailSection />
      </NewsProvider>
    </main>
  );
}
