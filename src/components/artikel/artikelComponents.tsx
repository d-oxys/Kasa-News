import { Tooltip } from 'flowbite-react';

export const ArticleComponent = (props: AtricleDataInterface) => {
  if (props.type == 'paragraph') {
    return <p className='text-justify leading-loose'>{props.content}</p>;
  }

  if (props.type == 'list') {
    const content = props.content as string[];

    return (
      <ul className='list-decimal space-y-2 pl-7'>
        {content.map((content, k) => (
          <li key={k} className='leading-loose'>
            {content}
          </li>
        ))}
      </ul>
    );
  }

  if (props.type == 'subtitle') {
    return <h2 className='text-xl font-bold'>{props.content}</h2>;
  }

  return <></>;
};

export const SocialMediaBtn = ({ Icon, className, onClick, title }: SocialMediaBtnType) => {
  return (
    <Tooltip content={title} placement='top-start'>
      <div onClick={() => onClick()} className={`${className} flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-white`}>
        <Icon className='text-xl' />
      </div>
    </Tooltip>
  );
};
