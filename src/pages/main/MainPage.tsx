import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import { MdLoop } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';

function MainPage() {
  return (
    <div id='layout' className='app-container h-screen flex flex-col justify-center text-content'>
      {/* main frame */}
      <div id='main' className='bg-fill rounded-lg flex flex-col'>
        {/* header */}
        <Header />
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
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
