import { MagicCard } from '@/components/magicui/magic-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ArticleProps {
  title: string;
  content: string;
  authorId: number;
}

const ArticleCard = ({ title, content, authorId }: ArticleProps) => {
  return (
    <Card className="p-0 w-full shadow-none border-none">
      <MagicCard gradientColor={'#D9D9D955'} className="p-0 w-full">
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
        {/* <CardContent className="p-4"></CardContent> */}
        {/* <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
        </CardFooter> */}
      </MagicCard>
    </Card>
  );
};

export default ArticleCard;
