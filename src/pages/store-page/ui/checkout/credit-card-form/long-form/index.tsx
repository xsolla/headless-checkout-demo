import { StyledCreditCardLongFormContainer } from '../../../../styled/checkout/checkout.styles.ts';
import { FieldName } from '../../field-name.enum.ts';
import { FormattedMessage } from 'react-intl';
import { FC, useMemo } from 'react';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';

export const CreditCardLongForm: FC<{ visibleFields: Field[] }> = ({ visibleFields }) => {
  const renderField = (type: string, fieldName: string) => {
    if (visibleFields.some((field) => field.name === fieldName)) {
      switch (type) {
        case 'text':
          return <psdk-text name={fieldName}></psdk-text>;
        case 'select':
          return <psdk-select name={fieldName}></psdk-select>;
        case 'phone':
          return <psdk-phone showflags={true} name={fieldName}></psdk-phone>;
        default:
          return null;
      }
    }
    return null;
  };

  const billingInformationFieldsLength = useMemo(() => {
    return visibleFields.filter((field) =>
      [
        FieldName.cardHolderName,
        FieldName.installments,
        FieldName.cpfName,
        FieldName.cardNumber,
        FieldName.birthDate,
      ].includes(field.name as FieldName),
    ).length;
  }, visibleFields);

  const addressSectionFieldsLength = useMemo(() => {
    return visibleFields.filter((field) =>
      [
        FieldName.street,
        FieldName.address1,
        FieldName.address2,
        FieldName.streetNumber,
        FieldName.apt,
        FieldName.city,
        FieldName.zip,
        FieldName.state,
        FieldName.phone,
      ].includes(field.name as FieldName),
    ).length;
  }, visibleFields);

  return (
    <StyledCreditCardLongFormContainer>
      {!!billingInformationFieldsLength && (
        <div className={'billing-information'}>
          <h4>
            <FormattedMessage
              id={'store.page.long-form.billing-information'}
              defaultMessage={'Billing information'}
            />
          </h4>
          {renderField('text', FieldName.cardHolderName)}
          {renderField('select', FieldName.installments)}
          {renderField('text', FieldName.cpfName)}
          {renderField('text', FieldName.cpfNumber)}
          {renderField('text', FieldName.birthDate)}
        </div>
      )}
      {!!addressSectionFieldsLength && (
        <div className={'address'}>
          <h4>
            <FormattedMessage id={'store.page.long-form.address'} defaultMessage={'Address'} />
          </h4>
          {renderField('text', FieldName.street)}
          {renderField('text', FieldName.address1)}
          {renderField('text', FieldName.address2)}
          <div className={'row'}>
            {renderField('text', FieldName.streetNumber)}
            {renderField('text', FieldName.apt)}
          </div>
          <div className={'row'}>
            {renderField('text', FieldName.city)}
            {renderField('text', FieldName.zip)}
          </div>
          {renderField('select', FieldName.state)}
          {renderField('phone', FieldName.phone)}
        </div>
      )}
    </StyledCreditCardLongFormContainer>
  );
};
