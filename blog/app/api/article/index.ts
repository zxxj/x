import { CreateType } from '@/types/article';
import { request } from '@/app/api';

export const create = (values: CreateType) => {
  request('/article', {
    method: 'post',
    body: JSON.stringify(values),
  });
};
