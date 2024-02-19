import logoLight from 'src/assets/img/Logo-light.png';
import { MdLoop } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';

function MainPage() {
  return (
    <div id='layout' className='app-container h-screen flex flex-col justify-center'>
      <div id='main' className='bg-fill rounded-lg flex flex-col'>
        <header className='flex justify-center items-center border-b border-b-border h-16'>
          <div className='w-fit'>
            <img src={logoLight} alt='application logo' />
          </div>
        </header>
        <div className='p-4'>
          <p className='bg-surface font-mono rounded p-4'>Why couldn't the skeleton go to the Christmas party? Because he had no body to go with!</p>
          <div className='mt-4 p-0 flex flex-row justify-center items-center gap-3'>
            <button className='button button-icon-start button-default'>
              <MdLoop size={16} />
              copy
            </button>
            <button className='button button-icon-start button-primary'>
              <MdOutlineContentCopy size={16} />
              another one
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
