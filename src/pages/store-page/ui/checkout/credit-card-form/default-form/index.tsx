import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  CardNumberComponent,
  CheckboxComponent,
  PhoneComponent,
  SelectComponent,
  TextComponent,
} from '@xsolla/pay-station-sdk';
import { FieldName } from '../../field-name.enum.ts';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { WebComponentAbstract } from '@xsolla/pay-station-sdk/dist/core/web-components/web-component.abstract';
import { StyledDefaultFormContainer } from '../../../../styled/checkout.styles.ts';

export const DefaultForm: FC<{
  visibleFields: Field[];
  isCreditCardForm: boolean;
  isShortForm: boolean;
}> = ({ visibleFields, isCreditCardForm, isShortForm }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const filterFields = useCallback(
    (field) => {
      const excludedFields = [
        FieldName.cvv,
        FieldName.cardYear,
        FieldName.cardMonth,
        FieldName.cardNumber,
      ];
      return isCreditCardForm ? !excludedFields.includes(field.name) : true;
    },
    [isCreditCardForm],
  );

  const isLongForm = !isShortForm && isCreditCardForm;

  const renderedFields = useMemo(() => {
    return isLongForm ? [] : visibleFields?.filter(filterFields);
  }, [visibleFields, filterFields, isLongForm]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.innerHTML = '';

    const renderControl = <T extends WebComponentAbstract>(control: T, field: Field) => {
      control.setAttribute('name', field.name);
      containerRef.current?.appendChild(control);
    };

    renderedFields?.forEach((field) => {
      if (field.type === 'text' && field.name === 'card_number') {
        const control = new CardNumberComponent();

        control.setAttribute('icon', 'true');
        renderControl(control, field);
        return;
      }

      if (field.type === 'text' && field.name === 'phone') {
        const phone = new PhoneComponent();

        phone.setAttribute('showFlags', 'true');
        renderControl(phone, field);
        return;
      }

      if (field.type === 'text') {
        const textComponent = new TextComponent();
        renderControl(textComponent, field);
        return;
      }

      if (field.type === 'select') {
        const select = new SelectComponent();
        renderControl(select, field);
        return;
      }

      if (field.type === 'checkbox') {
        const checkbox = new CheckboxComponent();

        renderControl(checkbox, field);
      }
    });
  }, [visibleFields]);

  return <StyledDefaultFormContainer ref={containerRef}></StyledDefaultFormContainer>;
};
