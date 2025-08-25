import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Segmented } from 'antd';
import { HomeIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/solid'
import { HomeIcon as HomeOutlineIcon, ClipboardDocumentListIcon as OutlineClipboardDocumentListIcon, UserIcon as OutlineUserIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const iconWidth = 20
  const iconHeight = 20

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
            { value: '/home', label: '首页', icon: value === '/home' ? <HomeIcon width={iconWidth} height={iconHeight} /> : <HomeOutlineIcon width={iconWidth} height={iconHeight} /> },
            { value: '/article', label: '文章', icon: value === '/article' ? <ClipboardDocumentListIcon width={iconWidth} height={iconHeight} /> : <OutlineClipboardDocumentListIcon width={iconWidth} height={iconHeight} /> },
            { value: '/about', label: '关于', icon: value === '/about' ? <UserIcon width={iconWidth} height={iconHeight} /> : <OutlineUserIcon width={iconWidth} height={iconHeight} /> },
          ]}
          onChange={(val) => handleClick(val as string)}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Header;
