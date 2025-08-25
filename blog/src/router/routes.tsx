import About from '@/views/about';
import Article from '@/views/article';
import Home from '@/views/home/index';
import { Navigate } from 'react-router-dom';

export const routes = [
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', name: '首页', element: <Home /> },
  { path: '/article', name: '文稿', element: <Article /> },
  { path: '/about', name: '关于', element: <About /> },
];
