import { CreditCardShortForm } from './short-form';
import { FC } from 'react';
import { CreditCardLongForm } from './long-form';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';

export const CreditCardForm: FC<{ isShortForm: boolean; visibleFields: Field[] }> = ({
  isShortForm,
  visibleFields,
}) => {
  return isShortForm ? (
    <CreditCardShortForm />
  ) : (
    <CreditCardLongForm visibleFields={visibleFields} />
  );
};
