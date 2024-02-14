import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNewsState } from '@/store/newsContext';
import { Headline } from '@/types/globalTypes';
import Link from 'next/link';
import { Breadcrumb, Button } from 'flowbite-react';
import { FaUtensils } from 'react-icons/fa';
import ArticleLayout from '@/components/artikel/artikelLayout';
import { getRecommendation } from '@/services/getRecomendation';

const NewsDetail = () => {
  const pathname = usePathname();
  const { headlines } = useNewsState();
  const [titleParam, setTitleParam] = useState<string | undefined>();
  const [artikel, setArtikel] = useState<Headline | undefined>();
  const [recommendations, setRecommendations] = useState<any | undefined>();

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

  useEffect(() => {
    const fetchRecommendations = async () => {
      const recs = await getRecommendation();
      setRecommendations(recs);
    };

    fetchRecommendations();
  }, []);

  if (!artikel) {
    // Artikel tidak ditemukan
    return <div>Artikel tidak ditemukan</div>;
  }

  // Gunakan data artikel
  const { title, urlToImage, author, publishedAt, content, description, url } = artikel;

  return (
    <div>
      <div className='mb-5 px-6 py-4 capitalize lg:px-24 xl:px-36'>
        <div className=''>
          <Breadcrumb className='mb-6 ml-auto md:ml-16'>
            <Breadcrumb.Item>
              <Link href='/artikels' className='flex items-center gap-x-2 text-black'>
                <FaUtensils /> Artikel
              </Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Link href={`${url}`} className='flex items-center gap-x-2 text-black'>
                {author}
              </Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>{publishedAt}</Breadcrumb.Item>
          </Breadcrumb>

          <ArticleLayout
            baseUrl='/artikels'
            data={{
              title: title || '',
              headline: description || '',
              imageUrl: urlToImage,
            }}
            recomendations={recommendations}
          >
            <div className='grid grid-cols-2 gap-y-3 rounded-md border border-gray-300 px-5 py-6 text-center lg:grid-cols-3'>
              <div className=''>
                <h2 className='font-bold'>Di Unggah Pada :</h2>
                <p>{new Date(publishedAt).toDateString()}</p>
              </div>

              <div className=''>
                <h2 className='font-bold'></h2>
                <p></p>
              </div>

              <div className=''>
                <h2 className='font-bold'>author</h2>
                <p>{author}</p>
              </div>
            </div>

            <h1 className='text-3xl font-bold'>Content</h1>

            <div>
              <h3 className='mb-1 font-bold'></h3>
              <p className='pr-14 leading-relaxed lg:pr-2'>{content}</p>
            </div>
            <div>
              <h3 className='mb-1 font-bold'>Terkait</h3>
              <p className='pr-14 leading-relaxed lg:pr-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sint praesentium quos deserunt labore eligendi mollitia provident similique, odit necessitatibus corporis ipsam eum, vitae saepe dolor molestias iusto id nihil
                quasi eos. Rerum cum, optio hic veniam minima fugiat expedita vitae ut, incidunt quibusdam provident reiciendis, itaque quidem ipsum reprehenderit obcaecati quasi repudiandae sequi quia eveniet magni magnam! Sit soluta,
                architecto sint cum mollitia voluptas, ipsum doloribus ducimus error ea nobis animi fugit illo saepe obcaecati consequuntur natus? Maiores, et. Iste repellat magnam officia dicta laborum exercitationem sunt totam beatae!
                Eligendi accusantium ad eum nulla ullam, delectus veritatis rem exercitationem atque nostrum? Quae magni sapiente saepe illum placeat dolorem necessitatibus ex consectetur inventore, iusto illo explicabo accusantium
                architecto id eaque praesentium perspiciatis voluptas nemo nesciunt eos quod facilis eum delectus ratione! Nobis placeat iure sapiente possimus itaque dicta sequi nulla aliquid ipsa, illo nostrum, sed fuga rerum molestias
                similique a.
              </p>
            </div>
          </ArticleLayout>
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;
