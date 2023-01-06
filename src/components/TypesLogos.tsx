import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { LogoMobile } from './LogoMobile';

export function TypesLogos() {
  return (
    <div>
      <Link to={'/'}>
        <div className='lg:hidden md:hidden'>
          <Logo />
        </div>

        <div className='xl:hidden'>
          <LogoMobile />
        </div>
      </Link>
    </div>
  );
}
