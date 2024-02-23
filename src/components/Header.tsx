import logoLight from 'src/assets/img/Logo-light.png';
import logoDark from 'src/assets/img/Logo-dark.png';
import themeStore from 'src/store/ThemeStore';
import { observer } from 'mobx-react';

function Header() {
  return (
    <header className='flex justify-center items-center border-b border-b-border h-16'>
      <div className='w-fit'>
        <img src={themeStore.theme === 'light' ? logoLight : logoDark} alt='application logo' />
      </div>
    </header>
  );
}

export default observer(Header);
