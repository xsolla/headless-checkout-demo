import React, { useEffect } from 'react';
import { StyledRootDiv } from './styled/root.styles.ts';
import {
  StyledHeader,
  StyledHeaderIconWrapper,
  StyledHeaderSelectWrapper,
} from './styled/header.styles.ts';
import {
  StyledPromo,
  StyledPromoTitle,
  StyledPromoBadge,
  StyledBadgeLogo,
  StyledBadgeIconWrapper,
  StyledBadgeText,
} from './styled/promo.styles.ts';
import {
  StyledFooter,
  StyledFooterText,
  StyledFooterSelectWrapper,
} from './styled/footer.styles.ts';
import { useAppSelector } from '../../redux/hooks.ts';
import { selectTokenGenerated } from '../../redux/sdk-configuration';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Routes } from '../../routes/routes.enum.ts';
import { StorePageRoutes } from '../../routes/store-page/store-page-routes.enum.ts';
import { OpenDemoButton } from './ui/buttons/open-demo';
import { SvgIcon } from '../../components/svg-icon/index.tsx';
import Account from '../../assets/icons/account.svg';
import DronLogo from '../../assets/icons/dron-logo.svg';
import { SelectLanguageWrapper } from './ui/selects/select-language/index.tsx';
import { FormattedMessage } from 'react-intl';

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
      <StyledHeader>
        <StyledHeaderIconWrapper>
          <SvgIcon url={DronLogo} />
        </StyledHeaderIconWrapper>
        <StyledHeaderSelectWrapper>
          <SelectLanguageWrapper />
        </StyledHeaderSelectWrapper>
      </StyledHeader>
      <StyledPromo>
        <StyledPromoTitle>
          <FormattedMessage id={'start.page.title'} defaultMessage={'Headless Checkout demo'} />
        </StyledPromoTitle>
        <StyledPromoBadge>
          <StyledBadgeLogo>
            <StyledBadgeIconWrapper>
              <SvgIcon url={Account} />
            </StyledBadgeIconWrapper>
          </StyledBadgeLogo>
          <StyledBadgeText>Pay Station</StyledBadgeText>
        </StyledPromoBadge>
      </StyledPromo>
      <StyledFooter>
        <StyledFooterText>
          <FormattedMessage
            id={'start.page.capture'}
            defaultMessage={
              'Get maximum control over the payment flow and customize the layout, fields, and styles to match your game or store design'
            }
          />
        </StyledFooterText>
        <StyledFooterSelectWrapper>
          <SelectLanguageWrapper />
        </StyledFooterSelectWrapper>
        <OpenDemoButton />
      </StyledFooter>
    </StyledRootDiv>
  );
}
