import { request } from '@/app/api';
import { LoginType } from '@/types/auth/login';

export const login = (values: LoginType) =>
  request('/auth/login', {
    method: 'post',
    body: JSON.stringify(values),
  });
