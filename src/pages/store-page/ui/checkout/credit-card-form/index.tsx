import { CreditCardShortForm } from './short-form';
import { FC } from 'react';
import { CreditCardLongForm } from './long-form';

export const CreditCardForm: FC<{ isShortForm: boolean }> = ({ isShortForm }) => {
  return isShortForm ? <CreditCardShortForm /> : <CreditCardLongForm />;
};
