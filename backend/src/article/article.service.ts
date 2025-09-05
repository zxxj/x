import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'prisma/prisma.service';
import { ArticleEntity } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    userId: number,
    createArticleDto: CreateArticleDto,
  ): Promise<string> {
    try {
      await this.prismaService.article.create({
        data: {
          title: createArticleDto.title,
          description: createArticleDto.description,
          content: createArticleDto.content,
          authorId: userId,
        },
      });
      return '文章创建成功!';
    } catch (error) {
      throw new Error(`文章创建失败:${error}`);
    }
  }

  async findAll(pageNumber = 1, pageSize = 10): Promise<ArticleEntity[]> {
    try {
      const articleList = this.prismaService.article.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      });

      return articleList;
    } catch (error) {
      throw new Error(`文章查询失败: ${error}`);
    }
  }

  async findOne(id: number): Promise<ArticleEntity> {
    const article = await this.prismaService.article.findUnique({
      where: { id },
    });

    if (!article) throw new NotFoundException('文章不存在!');
    return article;
  }

  async update(
    id: number,
    userId: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<string> {
    const article = await this.findOne(id);

    // 只有作者本人才能修改
    if (article.authorId !== userId)
      throw new ForbiddenException('只有作者有权修改此文章!');

    try {
      await this.prismaService.article.update({
        where: { id },
        data: { ...updateArticleDto },
      });

      return '文章更新成功!';
    } catch (error) {
      throw new Error(`文章更新失败: ${error}`);
    }
  }

  async remove(id: number, userId: number): Promise<string> {
    const article = await this.findOne(id);

    if (article.authorId !== userId)
      throw new ForbiddenException('只有作者有权删除此文章!');

    try {
      await this.prismaService.article.delete({
        where: { id },
      });

      return '文章删除成功!';
    } catch (error) {
      throw new Error(`文章删除失败: ${error}`);
    }
  }
}
