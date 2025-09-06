import { MagicCard } from '@/components/magicui/magic-card';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

interface ArticleProps {
  id: number;
  title: string;
  description?: string;
  content: string;
  authorId: number;
}

const ArticleCard = ({
  id,
  title,
  description,
  content,
  authorId,
}: ArticleProps) => {
  return (
    <Link href={`/article/${id}`}>
      <Card className="p-0 w-full shadow-none border-none my-5 h-[100px] cursor-target">
        <MagicCard gradientColor={'#D9D9D955'} className="p-0 w-full h-full">
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardDescription className="pl-5 pt-2.5">
            {description}
          </CardDescription>

          {/* <CardContent className="p-4"></CardContent> */}
          {/* <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
        </CardFooter> */}
        </MagicCard>
      </Card>
    </Link>
  );
};

export default ArticleCard;
