import { useParams } from 'react-router-dom';

import { Header } from '../components/Header';
import { SidebarDesktop } from '../components/SidebarDesktop';
import { UserNoAuth } from '../components/UserNoAuth';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {name && email ? (
        <main className='flex flex-1'>
          {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
          <SidebarDesktop />
        </main>
      ) : (
        <main className='flex justify-center items-center h-screen text-center'>
          <UserNoAuth />
        </main>
      )}
    </div>
  );
}
