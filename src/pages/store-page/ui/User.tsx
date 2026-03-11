import React from 'react';
import { StyledUserButton } from '../styled/user.styles.ts';
import userIcon from '../../../assets/icons/icon_user--line.svg';
import logoutIcon from '../../../assets/icons/icon_logout--line.svg';

export const User = () => {
  return (
    <StyledUserButton>
      <span className='button__inner'>
        <span className='button__icon'>
          <img src={userIcon} alt='' />
        </span>
        <span className='button__label'>fluffy_kitt</span>
        <span className='button__icon'>
          <img src={logoutIcon} alt='' />
        </span>
      </span>
    </StyledUserButton>
  );
};
