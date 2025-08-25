import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Segmented } from 'antd';
import { HomeIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleClick = async (path: string) => {
    setValue(path)
    await navigate(path);
  };

  return (
    <div className="absolute w-full h-[40px] inset-0 text-white mt-5 flex justify-between items-center px-7 lg:px-20">
      <img rel="icon" src="/logo2.svg" className='w-10' />
      <div>
        <Segmented
          size="middle"
          shape="round"
          value={value}
          options={[
            { value: '/home', label: '首页', icon: <HomeIcon width={20} height={20} /> },
            { value: '/article', label: '文章', icon: <ClipboardDocumentListIcon width={20} height={20} /> },
            { value: '/about', label: '关于', icon: <UserIcon width={20} height={20} /> },
          ]}
          onChange={(val) => handleClick(val as string)}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
