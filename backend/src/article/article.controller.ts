import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import type { Request } from 'express';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createArticleDto: CreateArticleDto) {
    const userId = req.user!.userId;
    return this.articleService.create(Number(userId), createArticleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('pageNumber') pageNumber = 1,
    @Query('pageSize') pageSize = 10,
  ) {
    return this.articleService.findAll(pageNumber, pageSize);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    const userId = req.user!.userId;
    return this.articleService.update(
      Number(id),
      Number(userId),
      updateArticleDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number, @Req() req: Request) {
    const userId = req.user!.userId;
    return this.articleService.remove(Number(id), Number(userId));
  }
}
