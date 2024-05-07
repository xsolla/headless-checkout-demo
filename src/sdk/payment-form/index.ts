import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { FormConfiguration } from '@xsolla/pay-station-sdk/dist/core/form/form-configuration.interface';
import { Form } from '@xsolla/pay-station-sdk/dist/core/form/form.interface';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';

export const getPaymentFormSdk = async (parameters: FormConfiguration): Promise<Field[]> => {
  const response: Form = await payStationSdkApiClient.form.init(parameters);

  return response.fields;
};
