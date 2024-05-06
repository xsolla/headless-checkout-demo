import { StyledCreditCardLongFormContainer } from '../../../../styled/checkout.styles.ts';
import { FieldName } from '../../field-name.enum.ts';
import { FormattedMessage } from 'react-intl';

export const CreditCardLongForm = () => {
  return (
    <StyledCreditCardLongFormContainer>
      <div className={'billing-information'}>
        <h4>
          <FormattedMessage
            id={'store.page.long-form.billing-information'}
            defaultMessage={'Billing information'}
          />
        </h4>
        <psdk-text name={FieldName.cardHolderName}></psdk-text>
        <psdk-text name={FieldName.cpfName}></psdk-text>
        <psdk-text name={FieldName.cpfNumber}></psdk-text>
        <psdk-text name={FieldName.birthDate}></psdk-text>
      </div>
      <div className={'address'}>
        <h4>
          <FormattedMessage id={'store.page.long-form.address'} defaultMessage={'Address'} />
        </h4>
        <psdk-text name={FieldName.street}></psdk-text>
        <div className={'row'}>
          <psdk-text name={FieldName.streetNumber}></psdk-text>
          <psdk-text name={FieldName.apt}></psdk-text>
        </div>
        <div className={'row'}>
          <psdk-text name={FieldName.city}></psdk-text>
          <psdk-text name={FieldName.zip}></psdk-text>
        </div>
        <psdk-select name={FieldName.state}></psdk-select>
        <psdk-phone name={FieldName.phone}></psdk-phone>
      </div>
    </StyledCreditCardLongFormContainer>
  );
};
