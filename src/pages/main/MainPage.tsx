import logoLight from 'src/assets/img/Logo-light.png';

function MainPage() {
  return (
    <div
      id='layout'
      className='app-container h-screen flex flex-col justify-center'
    >
      <div id='main' className='bg-fill rounded-lg'>
        <header className='flex justify-center items-center border-b border-b-border h-16'>
          <div className='w-fit'>
            <img src={logoLight} alt='application logo' />
          </div>
        </header>
        <div className='p-4'>
          <p className='bg-surface font-mono rounded p-4'>
            Why couldn't the skeleton go to the Christmas party? Because he had
            no body to go with!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
