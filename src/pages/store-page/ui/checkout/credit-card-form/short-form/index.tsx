import { StyledCreditCardShortFormContainer } from '../../../../styled/checkout/checkout.styles.ts';
import { FieldName } from '../../field-name.enum.ts';

export const CreditCardShortForm = () => {
  return (
    <StyledCreditCardShortFormContainer>
      <psdk-card-number name={FieldName.cardNumber} icon={true}></psdk-card-number>

      <div className='card-data-wrapper'>
        <div className='expire-wrapper'>
          <psdk-text name={FieldName.cardMonth}></psdk-text>
          <psdk-text name={FieldName.cardYear}></psdk-text>
        </div>
        <psdk-text id='cvv' name={FieldName.cvv}></psdk-text>
      </div>
    </StyledCreditCardShortFormContainer>
  );
};
