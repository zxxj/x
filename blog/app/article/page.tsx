import ArticleCard from './card';
import TargetCursor from '@/components/TargetCursor';
import { artcileList } from '../../data/list';

interface ArticleProps {
  id: number;
  title: string;
  description: string;
  content: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  key: number;
}

const Article = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const articles = await fetch('http://localhost:3001/article');
  // const articleList: ArticleProps[] = await articles.json();
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full ">
        <div className=" w-[15%] hidden lg:block xl:block 2xl:block z-[50]"></div>
        <div className=" relative flex-1 mx-5 overflow-hidden">
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
          {artcileList.map((item) => (
            <ArticleCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              content={item.content}
              authorId={item.authorId}
            />
          ))}
        </div>
        <div className=" w-[15%] hidden lg:block xl:block 2xl:block  z-[50]"></div>
      </div>
    </div>
  );
};

export default Article;
