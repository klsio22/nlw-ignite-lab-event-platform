import { Dispatch } from 'react';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

interface toggleMenuActive {
  menuIsActive: boolean;
  setMenuIsActive: Dispatch<boolean>;
}

export function SidebarMobile({
  menuIsActive,
  setMenuIsActive,
}: toggleMenuActive) {
  const { data } = useGetLessonsQuery();

  console.log('menu ' + menuIsActive);
  console.log('setMenuIsActive ' + setMenuIsActive);

  return (
    <>
      {!menuIsActive ? (
        <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:absolute lg:right-[-350px] lg:z-10 md:z-10 md:absolute md:right-[-350px] '>
          <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
            Cronograma de aulas
          </span>

          <div className='flex flex-col gap-8'>
            {data?.lessons.map((lesson) => {
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              );
            })}
          </div>
        </aside>
      ) : (
        <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:absolute lg:right-0 lg:z-10 md:z-10 md:absolute md:right-0 lg:top-0 md:top-0'>
          <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
            Cronograma de aulas
          </span>

          <div className='flex flex-col gap-8'>
            {data?.lessons.map((lesson) => {
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
}
