import React from 'react';
import { components, OptionProps } from 'react-select';
import { StyledFlag } from './styled.ts';
import DefaultIcon from '../../../assets/location--line.svg';
import { Image } from '../../image';

const cdnUrl = import.meta.env.VITE_CDN_URL;

const { SingleValue } = components;

export const IconSingleValue = (props: OptionProps<{ label: string; flag: string }>) => (
  // @ts-expect-error todo: fix type props
  <SingleValue {...props}>
    <StyledFlag>
      <Image
        placeHolderIcon={DefaultIcon}
        imgUrl={`${cdnUrl}/icons/flag-icons/${props.data.flag}.svg`}
        placeHolderWidth='18px'
      ></Image>
    </StyledFlag>
    {props.data.label}
  </SingleValue>
);
