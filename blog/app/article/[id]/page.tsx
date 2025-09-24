'use client';

import { useState, useEffect } from 'react';
import { EditorViewClient } from '@/components/slate-to-html';

type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
  const { id } = params;
  const [articleInfo, setArticleInfo] = useState<any>(null);
  const [artcileContent, setArtcileContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        // const res = await fetch(`http://localhost:3001/article/${id}`, {
        //   cache: 'no-store', // 不缓存，开发调试方便
        // });
        // const data = await res.json();
        // setArticleInfo(data);
        // setArtcileContent(JSON.parse(data.content));
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading || !articleInfo || !artcileContent) {
    return (
      <div className="p-4 mt-4 rounded-2xl dark:bg-[#0a0a0a] bg-[#fff] relative z-100">
        <p className="text-center">加载中...</p>
      </div>
    );
  }

  return (
    <div className="p-4 mt-4 rounded-2xl dark:bg-[#0a0a0a] bg-[#fff] relative z-100">
      <h1 className="text-xl font-bold text-center">{articleInfo.title}</h1>
      <EditorViewClient value={artcileContent} />
    </div>
  );
};

export default Page;
