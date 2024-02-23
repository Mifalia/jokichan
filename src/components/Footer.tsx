import { IoSunnyOutline, IoLogoGithub } from 'react-icons/io5';
import { RxMoon } from 'react-icons/rx';
import themeStore from 'src/store/ThemeStore';
import { observer } from 'mobx-react';

function Footer() {
  const handleThemeToggle = () => {
    themeStore.toggleTheme();
  };

  return (
    <footer className='h-11 px-4 flex justify-between items-center border-t border-t-border'>
      <span className='font-thin font-sans text-neutral'>© Copyright 2024 - Mifalia Nathanaël</span>
      <div className='flex gap-1'>
        <button className='rounded h-10 w-10 flex justify-center items-center text-primary' onClick={handleThemeToggle}>
          {themeStore.theme === 'light' ? <IoSunnyOutline size={20} /> : <RxMoon size={20} />}
        </button>
        <button className='rounded h-10 w-10 flex justify-center items-center text-neutral'>
          <IoLogoGithub size={20} />
        </button>
      </div>
    </footer>
  );
}

export default observer(Footer);
