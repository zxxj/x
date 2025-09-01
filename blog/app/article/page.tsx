import ArticleCard from './card';

interface ArticleProps {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  key: number;
}

const Article = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const articles = await fetch('http://localhost:3001/article');
  const articleList: ArticleProps[] = await articles.json();
  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full">
        <div className="bg-amber-500 w-[15%]">1</div>
        <div className="bg-blue-700 flex-1 mx-5">
          {articleList.map((item) => (
            <ArticleCard
              key={item.id}
              title={item.title}
              content={item.content}
              authorId={item.authorId}
            />
          ))}
        </div>
        <div className="bg-emerald-600 w-[15%]">3</div>
      </div>
    </div>
  );
};

export default Article;
