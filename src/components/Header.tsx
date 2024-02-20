import logoLight from 'src/assets/img/Logo-light.png';

function Header() {
  return (
    <header className='flex justify-center items-center border-b border-b-border h-16'>
      <div className='w-fit'>
        <img src={logoLight} alt='application logo' />
      </div>
    </header>
  );
}

export default Header;
