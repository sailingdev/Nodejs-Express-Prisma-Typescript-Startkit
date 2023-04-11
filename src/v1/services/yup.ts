import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

export const phoneRegExp =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const yupObject = (object?: ObjectShape) => yup.object(object);

export const yupString = yup.string().nullable();
export const yupBoolean = yup.boolean().nullable();
export const yupNumber = yup.number().nullable();
export const yupMixed = yup.mixed().nullable();
export const yupDate = yup.date().nullable();
export const yupArray = (type: any) => yup.array().of(type).nullable();

export const requiredString = yupString.required();
export const requiredBoolean = yupBoolean.required();
export const requiredNumber = yupNumber.required();
export const requiredMixed = yupMixed.required();
export const requiredDate = yupDate.required();
export const requiredObject = (object?: ObjectShape) =>
  yupObject(object)
    .required()
    .transform((value) => (JSON.stringify(value) === '{}' ? undefined : value));
export const requiredArray = (type: any) => yupArray(type).min(1);
