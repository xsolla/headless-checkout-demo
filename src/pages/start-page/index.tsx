import React, { useEffect } from 'react';
import { StyledRootDiv } from './styled/root.styles.ts';
import { Header } from './ui/header';
import { LeftColumn } from './ui/LeftColumn.tsx';
import { RightColumn } from './ui/RightColumn.tsx';
import { StyledBody } from './styled/body.styles.ts';
import { useAppSelector } from '../../redux/hooks.ts';
import { selectTokenGenerated } from '../../redux/sdk-configuration';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Routes } from '../../routes/routes.enum.ts';
import { StorePageRoutes } from '../../routes/store-page/store-page-routes.enum.ts';

export function StartPage() {
  const tokenGenerated = useAppSelector(selectTokenGenerated);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    if (tokenGenerated) {
      navigate({
        pathname: `/${Routes.storePage}/${StorePageRoutes.paymentMethods}`,
        search: params.toString(),
      });
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
