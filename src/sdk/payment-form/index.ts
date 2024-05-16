import { payStationSdkApiClient } from '../pay-station-sdk-client.ts';
import { FormConfiguration } from '@xsolla/pay-station-sdk/dist/core/form/form-configuration.interface';
import { Form } from '@xsolla/pay-station-sdk/dist/core/form/form.interface';
import { Field } from '@xsolla/pay-station-sdk/dist/core/form/field.interface';
import { NextAction } from '@xsolla/pay-station-sdk/dist/core/actions/next-action.interface';

export const getPaymentFormSdk = async (parameters: FormConfiguration): Promise<Form> => {
  return await payStationSdkApiClient.form.init(parameters);
};

export const setupAndAwaitFieldsLoading = (fields: Field[]): Promise<void> => {
  return payStationSdkApiClient.form.setupAndAwaitFieldsLoading(fields);
};

export const onNextAction = (callbackFn: (nextAction: NextAction) => void): void => {
  return payStationSdkApiClient.form.onNextAction(callbackFn);
};
