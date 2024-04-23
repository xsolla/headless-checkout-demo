import userIcon from '../../../assets/user.png';
import React from 'react';
import { StyledUserName } from '../styled/user.styles.ts';
import { useIntl } from 'react-intl';

export const User = () => {
  const intl = useIntl();
  const imgAlt = intl.formatMessage({ id: 'store.page.user' });

  return (
    <StyledUserName>
      <span className='icon'>
        <img src={userIcon} alt={imgAlt} />
      </span>
      <span>fluffy_kitt</span>
    </StyledUserName>
  );
};
