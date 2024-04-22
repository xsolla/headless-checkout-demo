import React from 'react';
import { StyledRootDiv } from './styled/root.styles.ts';
import { Header } from './ui/Header.tsx';
import { LeftColumn } from './ui/LeftColumn.tsx';
import { RightColumn } from './ui/RightColumn.tsx';
import { StyledBody } from './styled/body.styles.ts';

export function StartPage() {
  return (
    <StyledRootDiv>
      <Header />

      <StyledBody>
        <LeftColumn />
        <RightColumn />
      </StyledBody>
    </StyledRootDiv>
  );
}
