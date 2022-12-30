import { Logo } from './Logo';
import { LogoMobile } from './LogoMobile';

export function TypesLogos() {
  return (
    <div>
      <div className='lg:hidden md:hidden'>
        <Logo />
      </div>

      <div className='xl:hidden'>
        <LogoMobile />
      </div>
    </div>
  );
}
