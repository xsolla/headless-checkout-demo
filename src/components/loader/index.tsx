import React from 'react';
import { StyledLoader } from './styled.ts';
import { LoaderProps } from './loader-props.interface.ts';

export function Loader(props: LoaderProps) {
  return <StyledLoader {...props}></StyledLoader>;
}
