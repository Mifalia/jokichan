import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import { MdLoop } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';
import jokeStore from 'src/store/JokeStore';
import { observer } from 'mobx-react';
import toast, { Toaster } from 'react-hot-toast';
import Typist from 'react-typist-component';
import { useState } from 'react';

function MainPage() {
  const [showCursor, setShowCursor] = useState(true);

  const handleGenerateClick = () => {
    jokeStore.generateJoke();
    setShowCursor(true);
  };

  const handleGenerateDone = () => {
    setShowCursor(false);
  };

  const handleCopy: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    if (!jokeStore.joke.error) {
      let jokeToCopy: string | undefined = '';
      switch (jokeStore.joke.type) {
        case 'single':
          jokeToCopy = jokeStore.joke.joke;
          break;
        case 'twopart':
          jokeToCopy = `${jokeStore.joke.setup} ${jokeStore.joke.delivery}`;
          break;
        default:
          break;
      }
      navigator.clipboard.writeText(`${jokeToCopy}`); //copy process
      toast.success(`joke copied successfully`, { position: 'top-center' });

      return;
    }
  };

  const handleTagClick = (categoryName: string) => {
    jokeStore.toggleCategoryActivity(categoryName);
  };

  /*----
    RENDERING 
  ----*/
  return (
    <>
      <div id='layout' className='app-container h-screen flex flex-col justify-center text-content'>
        {/* main frame */}
        <div id='main' className='h-full md:h-fit bg-fill rounded-none md:rounded-lg flex flex-col'>
          {/* header */}
          <Header />
          {/* body */}
          <div className='p-4'>
            <p className='bg-surface font-mono rounded p-4 min-h-20'>
              {jokeStore.isLoading ? (
                <br />
              ) : (
                <Typist typingDelay={35} cursor={<span className={`text-primary ${!showCursor && 'hidden'}`}>|</span>} onTypingDone={handleGenerateDone}>
                  {jokeStore.joke.type === 'single' ? (
                    jokeStore.joke.joke
                  ) : (
                    <>
                      {jokeStore.joke.setup}
                      <Typist.Delay ms={1500}></Typist.Delay>
                      <br />
                      {jokeStore.joke.delivery}
                    </>
                  )}
                </Typist>
              )}
            </p>
            <div className='mt-4 p-0 flex flex-row justify-center items-center gap-3'>
              <button
                className={`button button-icon-start button-default shrink-0 justify-center grow md:grow-0 ${jokeStore.isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={jokeStore.isLoading ? true : false}
                onClick={handleCopy}
              >
                <MdOutlineContentCopy size={16} />
                copy
              </button>
              <button className='button button-icon-start button-primary shrink-0 justify-center grow md:grow-0' onClick={handleGenerateClick}>
                <MdLoop size={16} />
                another one
              </button>
            </div>
            <div className='mt-12 md:mt-8 flex flex-col md:flex-row justify-start items-start gap-4'>
              <div className='flex flex-start items-center gap-1.5 font-extralight p-0 w-fit capitalize shrink-0 grow-0'>
                <MdFilterList size={16} />
                customize filters
              </div>
              <div className='flex flex-start flex-wrap gap-x-2 gap-y-4'>
                {jokeStore.categories?.map((category, index) => (
                  <div key={index} className='w-fit h-fit'>
                    <input type='checkbox' id={category.name + 'Checkbox'} name={category.name} value={category.name} className='hidden' />
                    <label htmlFor={category.name + 'Checkbox'} className={`cursor-pointer tag ${category.active ? 'active' : ''}`} onClick={() => handleTagClick(category?.name)}>
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default observer(MainPage);
