import React from 'react';
import Landing from '../../layouts/Sidebar';
import SidebarLayout from '../../layouts/Sidebar/SidebarLayout';

export default function App() {
  return (
    <div>
      <SidebarLayout>
        <Landing />
      </SidebarLayout>
    </div>
  );
};
