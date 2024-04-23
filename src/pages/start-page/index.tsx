import React, { useEffect } from 'react';
import { StyledRootDiv } from './styled/root.styles.ts';
import { Header } from './ui/Header.tsx';
import { LeftColumn } from './ui/LeftColumn.tsx';
import { RightColumn } from './ui/RightColumn.tsx';
import { StyledBody } from './styled/body.styles.ts';
import { useAppSelector } from '../../redux/hooks.ts';
import { selectTokenGenerated } from '../../redux/token';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes.enum.ts';

export function StartPage() {
  const tokenGenerated = useAppSelector(selectTokenGenerated);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenGenerated) {
      navigate(`/${Routes.storePage}`);
    }
  }, [tokenGenerated]);

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
