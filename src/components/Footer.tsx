import { IoSunnyOutline, IoLogoGithub } from 'react-icons/io5';

function Footer() {
  return (
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
  );
}

export default Footer;
