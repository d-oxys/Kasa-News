import { Article } from '@/types/newsTypes';
import { TProduct } from '@/types/globalTypes';

export const articleToProduct = (article: Article): TProduct => {
  return {
    id: article.id,
    imgUrl: article.imgUrl,
    name: article.author,
    title: article.title,
    category: article.category,
    description: article.content,
    price: 0,
    color: 'black',
    colors: ['black'],
  };
};
