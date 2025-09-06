import ArticleCard from './card';
import TargetCursor from '@/components/TargetCursor';

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

  const articles = await fetch('http://localhost:3001/article');
  const articleList: ArticleProps[] = await articles.json();
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full ">
        <div className="bg-amber-500 w-[15%] hidden lg:block xl:block 2xl:block z-[50]">
          1
        </div>
        <div className=" relative flex-1 mx-5 overflow-hidden">
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />
          {articleList.map((item) => (
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
        <div className="bg-emerald-600 w-[15%] hidden lg:block xl:block 2xl:block  z-[50]">
          3
        </div>
      </div>
    </div>
  );
};

export default Article;
