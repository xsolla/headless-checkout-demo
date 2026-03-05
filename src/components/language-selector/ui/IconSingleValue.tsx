import React from 'react';
import { components, OptionProps } from 'react-select';
import { StyledFlag } from './styled.ts';
import { SvgIcon } from '../../svg-icon/index.tsx';

const cdnUrl = import.meta.env.VITE_CDN_URL;

const { SingleValue } = components;

export const IconSingleValue = (props: OptionProps<{ label: string; flag: string }>) => (
  // @ts-expect-error todo: fix type props
  <SingleValue {...props}>
    <StyledFlag>
      <SvgIcon className='flag-icon' url={`${cdnUrl}/icons/flag-icons/${props.data.flag}.svg`} />
    </StyledFlag>
    {props.data.label}
  </SingleValue>
);
