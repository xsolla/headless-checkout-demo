import { FC } from 'react';
import { StyledFormErrorContainer } from '../../../styled/form-error.styles.ts';

export const FormError: FC<{ error: string; className?: string }> = ({ error, className }) => {
  return (
    <StyledFormErrorContainer className={className} dangerouslySetInnerHTML={{ __html: error }} />
  );
};
