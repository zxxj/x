import React from 'react';
import { Button } from '@/components/ui/button';
import { routes } from '@/router/routes';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="absolute w-full h-[40px] inset-0 text-white mt-5 flex justify-between px-20">
      <div>logo</div>
      <div className="h-full leading-10">
        {routes.map((route) => {
          const isActive = location.pathname === route.path; // 判断当前路由
          return (
            <Button
              key={route.path}
              variant={isActive ? 'link' : 'default'}
              onClick={() => handleClick(route.path)}
            >
              {route.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
