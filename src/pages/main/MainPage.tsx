import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import { MdLoop } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';
import jokeStore from 'src/store/JokeStore';
import { observer } from 'mobx-react';

function MainPage() {
  const handleGenerateAction = () => {
    jokeStore.generateJoke();
  };

  /*----
    RENDERING 
  ----*/
  return (
    <div id='layout' className='app-container h-screen flex flex-col justify-center text-content'>
      {/* main frame */}
      <div id='main' className='bg-fill rounded-lg flex flex-col'>
        {/* header */}
        <Header />
        {/* body */}
        <div className='p-4'>
          <p className='bg-surface font-mono rounded p-4 min-h-20'>
            {jokeStore.isLoading ? (
              <br />
            ) : jokeStore.joke.type === 'single' ? (
              jokeStore.joke.joke
            ) : (
              <>
                {jokeStore.joke.setup}
                <br />
                {jokeStore.joke.delivery}
              </>
            )}
          </p>
          <div className='mt-4 p-0 flex flex-row justify-center items-center gap-3'>
            <button className='button button-icon-start button-default'>
              <MdOutlineContentCopy size={16} />
              copy
            </button>
            <button className='button button-icon-start button-primary' onClick={handleGenerateAction}>
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

export default observer(MainPage);
