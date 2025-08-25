import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      token: {
        colorBgBase: "#fff",       // 页面背景
        colorTextBase: "#000",     // 基础文字
        colorPrimary: "#000",      // 主色（按钮、链接等）
        colorBorder: "#fff",       // 边框颜色
        colorBgContainer: "#fff",  // 组件容器背景
        colorBgElevated: "#fff",   // 弹窗/下拉菜单背景
        colorIcon: "#FFFFFF",         // 图标颜色
        colorLink: "#FFFFFF",         // 链接颜色
      },
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
