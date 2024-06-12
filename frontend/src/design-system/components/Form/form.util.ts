import { Field, Errors } from './Form.types';

export const validate = (values: Record<string, string>, schema: Field[]): Errors => {
  let errors: Errors = {};

  schema.forEach((field) => {
    if (field.required && !values[field.name]) {
      errors[field.name] = `${field.label} is required`;
    }
  });

  return errors;
};

