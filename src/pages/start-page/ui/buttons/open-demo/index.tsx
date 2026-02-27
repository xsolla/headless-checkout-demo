import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  createToken,
  selectIsSandbox,
  selectTokenIsFetching,
} from '../../../../../redux/sdk-configuration';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks.ts';
import { StyleButtonText, StyledShopButton } from '../../../styled/shop-button.styles.ts';
import { ButtonLoader } from '../loader/index.tsx';

export const OpenDemoButton = () => {
  const isSandbox = useAppSelector(selectIsSandbox);
  const isFetching = useAppSelector(selectTokenIsFetching);
  const dispatch = useAppDispatch();

  const handleOpenDemoClick = useCallback(() => {
    if (isFetching) {
      return;
    }

    dispatch(createToken());
  }, [isSandbox, isFetching]);

  return (
    <StyledShopButton tabIndex={0} onClick={handleOpenDemoClick}>
      <StyleButtonText isLoading={isFetching}>
        <FormattedMessage id={'start.page.button'} defaultMessage={'See it live'} />
      </StyleButtonText>
      {isFetching && <ButtonLoader />}
    </StyledShopButton>
  );
};
