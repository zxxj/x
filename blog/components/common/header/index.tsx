import Dock from './dock';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 fixed z-[20] px-4 sm:px-10 lg:px-40 bg-white dark:bg-[#0a0a0a] flex justify-between items-center border-b-[1px] border-b-[#e5e5e5]  dark:border-[#222323]">
      <Image
        className="dark:hidden block sm:w-16 sm:h-16"
        src="/lightLogo.svg"
        alt="Logo"
        priority
        width={40}
        height={40}
      />
      <Image
        className="hidden dark:block sm:w-16 sm:h-16"
        src="/darkLogo.svg"
        alt="Logo"
        priority
        width={40}
        height={40}
      />
      <Dock />
      <div>3</div>
    </div>
  );
};

export default Header;
