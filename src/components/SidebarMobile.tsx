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
        <aside className='absolute w-96 h-full bg-gray-700 p-6 border-l border-gray-600 lg:left-[-400px] lg:z-10 md:z-10 md:left-[-400px] md:ease-in-out lg:top-14 md:top-14 lg:ease-in-out lg:duration-1000 md:duration-1000'>
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
        <aside className='absolute w-full h-full bg-gray-700 p-6 border-l border-gray-600 lg:left-0 lg:z-[100] md:z-10 md:left-0 lg:top-14 md:top-14 md:ease-in-out lg:ease-in-out  lg:duration-1000 md:duration-1000'>
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
