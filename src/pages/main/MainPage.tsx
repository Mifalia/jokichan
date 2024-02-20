import logoLight from 'src/assets/img/Logo-light.png';
import { MdLoop } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';
import { IoSunnyOutline, IoLogoGithub } from 'react-icons/io5';

function MainPage() {
  return (
    <div id='layout' className='app-container h-screen flex flex-col justify-center text-content'>
      {/* main frame */}
      <div id='main' className='bg-fill rounded-lg flex flex-col'>
        {/* header */}
        <header className='flex justify-center items-center border-b border-b-border h-16'>
          <div className='w-fit'>
            <img src={logoLight} alt='application logo' />
          </div>
        </header>
        {/* body */}
        <div className='p-4'>
          <p className='bg-surface font-mono rounded p-4'>Why couldn't the skeleton go to the Christmas party? Because he had no body to go with!</p>
          <div className='mt-4 p-0 flex flex-row justify-center items-center gap-3'>
            <button className='button button-icon-start button-default'>
              <MdOutlineContentCopy size={16} />
              copy
            </button>
            <button className='button button-icon-start button-primary'>
              <MdLoop size={16} />
              another one
            </button>
          </div>
          <div className='mt-8 flex justify-start items-center gap-1'>
            <div className='button button-icon-start cursor-auto'>
              <MdFilterList size={16} />
              customize filters
            </div>
            <div className='flex flex-start flex-wrap gap-2'>
              <div>
                <input type='checkbox' id='programming' name='programming' value='programming' className='invisible' />
                <label htmlFor='programming' className='tag'>
                  Programming
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className='h-11 px-4 flex justify-between items-center border-t border-t-border'>
          <span className='font-thin font-sans text-neutral'>© Copyright 2024 - Mifalia Nathanaël</span>
          <div className='flex gap-1'>
            <button className='rounded h-10 w-10 flex justify-center items-center text-primary'>
              <IoSunnyOutline size={20} />
            </button>
            <button className='rounded h-10 w-10 flex justify-center items-center text-neutral'>
              <IoLogoGithub size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
