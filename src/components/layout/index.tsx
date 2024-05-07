import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLayout } from './styled.ts';

export function Layout() {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
}
