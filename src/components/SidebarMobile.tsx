import { Dispatch } from 'react';
import { BodyAside } from './BodyAside';

interface toggleMenuActive {
  menuIsActive: boolean;
  setMenuIsActive: Dispatch<boolean>;
}

export function SidebarMobile({
  menuIsActive,
  setMenuIsActive,
}: toggleMenuActive) {

  return (
    <>
      {!menuIsActive ? (
        <aside className='absolute w-96 h-full bg-gray-700 p-6 border-l border-gray-600 lg:left-[-400px] lg:z-[100] md:z-[100] md:left-[-400px] md:ease-in-out lg:top-14 md:top-14 lg:ease-in-out lg:duration-1000 md:duration-1000'>
          <BodyAside />
        </aside>
      ) : (
        <aside className='absolute w-full h-full bg-gray-700 p-6 border-l border-gray-600 lg:left-0 lg:z-[100] md:z-[100] md:left-0 lg:top-14 md:top-14 md:ease-in-out lg:ease-in-out  lg:duration-1000 md:duration-1000'>
          <BodyAside />
        </aside>
      )}
    </>
  );
}
