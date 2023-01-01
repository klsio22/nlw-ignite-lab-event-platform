import { BodyAside } from './BodyAside';

export function SidebarDesktop() {
  //console.log(data);
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:hidden md:hidden'>
      <BodyAside />
    </aside>
  );
}
