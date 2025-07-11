import React from 'react';
import { components, OptionProps } from 'react-select';
import { StyledFlag } from './styled.ts';
import { Image } from '../../image';
import DefaultIcon from '../../../assets/location--line.svg';

const cdnUrl = import.meta.env.VITE_CDN_URL;

const { Option } = components;
export const IconOption = (props: OptionProps<{ label: string; flag: string }>) => (
  // @ts-expect-error todo: need to fix types
  <Option {...props}>
    <StyledFlag>
      <Image
        placeHolderIcon={DefaultIcon}
        imgUrl={`${cdnUrl}/icons/flag-icons/${props.data.flag}.svg`}
        placeHolderWidth='18px'
      ></Image>
    </StyledFlag>
    {props.data.label}
  </Option>
);
