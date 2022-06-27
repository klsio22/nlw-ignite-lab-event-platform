import React from 'react';
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { SideBar } from '../components/SideBar';
import { Video } from '../components/Video';

export function Event() {
  return (
    <div>
      <Header />
      <SideBar />
      <Video />
      <Lesson />
    </div>
  );
}
