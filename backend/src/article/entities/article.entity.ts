export class ArticleEntity {
  id: number;
  title: string;
  content: string;
  description?: string | null;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}
