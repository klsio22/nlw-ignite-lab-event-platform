import classNames from 'classnames';
import { BodyAside } from './BodyAside';

interface toggleMenuActive {
  menuIsActive: boolean;
}

export function SidebarMobile({ menuIsActive }: toggleMenuActive) {
  return (
    <>
      <aside
        className={classNames(
          'absolute h-full bg-gray-700 p-6 border-l border-gray-600  md:ease-in-out lg:top-14 md:top-14 lg:ease-in-out lg:duration-1000 md:duration-1000 lg:z-[100] md:z-[100]',
          {
            'w-96 lg:left-[-400px] md:left-[-400px]': !menuIsActive,
            'w-full lg:left-0 md:left-0': menuIsActive,
          }
        )}
      >
        <BodyAside />
      </aside>
    </>
  );
}
