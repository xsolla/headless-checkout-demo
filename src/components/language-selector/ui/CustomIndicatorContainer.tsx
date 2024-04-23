import React from 'react';
import { StyledArrow } from './styled.ts';
import ArrowDown from '../../../assets/arrow-down.svg';
import { components } from 'react-select';

const { IndicatorsContainer } = components;

export const CustomIndicatorContainer = (props) => (
  <IndicatorsContainer {...props}>
    <StyledArrow src={ArrowDown} />
  </IndicatorsContainer>
);
