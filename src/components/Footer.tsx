import { IoSunnyOutline, IoLogoGithub } from 'react-icons/io5';
import { RxMoon } from 'react-icons/rx';
import themeStore from 'src/store/ThemeStore';
import { observer } from 'mobx-react';
import { REPOSITORY_URL, AUTHOR_URL } from 'src/config';

function Footer() {
  const handleThemeToggle = () => {
    themeStore.toggleTheme();
  };

  return (
    <footer className={'h-12 md:h-11 px-4 flex justify-between items-center border-t border-t-border mt-auto'}>
      <span className='font-thin font-sans text-neutral text-xs md:text-sm'>© Copyright 2024&nbsp;-&nbsp; 
        <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className='hover:underline'>
          Mifalia Nathanaël
        </a>
      </span>
      <div className='flex gap-1'>
        <button className='rounded h-10 w-10 flex justify-center items-center text-primary' onClick={handleThemeToggle}>
          {themeStore.theme === 'light' ? <IoSunnyOutline size={20} /> : <RxMoon size={20} />}
        </button>
        <a href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer" className='rounded h-10 w-10 flex justify-center items-center text-neutral'>
          <IoLogoGithub size={20} />
        </a>
      </div>
    </footer>
  );
}

export default observer(Footer);
