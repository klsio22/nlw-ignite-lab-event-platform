import { List } from 'phosphor-react';
import { TypesLogos } from './TypesLogos';
import { useState } from 'react';
import { SidebarMobile } from './SidebarMobile';

export function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const ToggleMode = () => {
    setMenuIsActive(!menuIsActive);
    console.log(menuIsActive);
  };

  return (
    <header
      className='w-full py-5 flex items-center justify-center bg-gray-700 
    border-b border-gray-600 lg:p-4 md:p-4 lg:justify-between md:justify-between'
    >
      <TypesLogos />

      <div className='hidden lg:flex lg:items-center lg:gap-2 md:flex md:items-center md:gap-2'>
        Aulas
        <List size={32} onClick={ToggleMode} />
        <SidebarMobile
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
        />
      </div>
    </header>
  );
}
