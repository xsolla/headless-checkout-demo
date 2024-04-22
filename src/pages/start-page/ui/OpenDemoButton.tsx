import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { generateToken, selectTokenIsFetching } from '../../../redux/token';
import { selectIsSandbox } from '../../../redux/sandbox';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { Loader } from '../../../components/loader';
import { StyledShopButton } from '../styled/shop-button.styles.ts';

export const OpenDemoButton = () => {
  const isSandbox = useAppSelector(selectIsSandbox);
  const isFetching = useAppSelector(selectTokenIsFetching);
  const dispatch = useAppDispatch();

  const handleOpenDemoClick = useCallback(() => {
    if (isFetching) {
      return;
    }

    dispatch(generateToken({ sandbox: !!isSandbox }));
  }, [isSandbox, isFetching]);

  return (
    <StyledShopButton onClick={handleOpenDemoClick}>
      <span>
        {isFetching ? (
          <Loader />
        ) : (
          <FormattedMessage
            id={'start.page.button'}
            defaultMessage={'See it live'}
          ></FormattedMessage>
        )}
      </span>
    </StyledShopButton>
  );
};
