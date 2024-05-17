import React from 'react';
import { StyledReturnLoader } from '../../../../styled/return-loader.styles.ts';
import { Loader } from '../../../../../../components/loader';
import { LoaderProps } from '../../../../../../components/loader/loader-props.interface.ts';

export const ReturnLoader = () => {
  const props: LoaderProps = {
    width: '40px',
    height: '40px',
    color: 'rgba(105, 57, 249, 1)',
    borderwidth: '5px',
  };
  return (
    <StyledReturnLoader>
      <Loader {...props} />
    </StyledReturnLoader>
  );
};
