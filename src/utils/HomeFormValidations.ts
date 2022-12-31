import * as Yup from 'yup';
import { emailField, maxValue, minLength, minValue, numericField, positiveValue, requiredField } from './FormValidationsProperties';

export const homeFormValidations = Yup.object({
    fullName: Yup.string().trim().min(4, minLength(4)).required(requiredField),
    email: Yup.string().email(emailField).required(requiredField),
    address: Yup.string().min(4, minLength(4)).required(requiredField),
    floor: Yup.number().typeError(numericField).positive().max(50, maxValue(50)).required(requiredField),
    zones: Yup.object().optional(),
    parking:Yup.object().optional(),
    value: Yup.number().typeError(numericField).positive(positiveValue).min(10000000, minValue(10000000)).required(requiredField),
    elevator: Yup.boolean(),
})