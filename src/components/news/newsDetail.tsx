import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Ganti dengan modul yang sesuai
import { useNewsState } from '@/store/newsContext';
import { Headline } from '@/types/globalTypes';

const NewsDetail = () => {
  const pathname = usePathname();
  const { headlines } = useNewsState();
  console.log('ini adlahal headlines detail : ', headlines);
  const [titleParam, setTitleParam] = useState<string | undefined>();
  const [artikel, setArtikel] = useState<Headline | undefined>();

  useEffect(() => {
    const titleFromPathname = decodeURIComponent(pathname.split('/')[2] || '');
    setTitleParam(titleFromPathname);
  }, [pathname]);

  useEffect(() => {
    if (headlines.length > 0 && titleParam) {
      const foundArtikel = headlines.find((headline: Headline) => encodeURIComponent(headline.title) === encodeURIComponent(titleParam || ''));
      setArtikel(foundArtikel);
    }
  }, [headlines, titleParam]);

  if (!artikel) {
    // Artikel tidak ditemukan
    return <div>Artikel tidak ditemukan</div>;
  }

  // Gunakan data artikel
  const { title, urlToImage, author, publishedAt, content } = artikel;

  return (
    <div>
      <h1>{title}</h1>
      <img src={urlToImage} alt={title} />
      <p>Penulis: {author}</p>
      <p>Tanggal Publikasi: {publishedAt}</p>
      <p>Konten: {content}</p>
      test
    </div>
  );
};
export default NewsDetail;
