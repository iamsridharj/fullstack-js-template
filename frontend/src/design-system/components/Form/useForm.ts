import { useEffect, useState } from 'react';
import { Errors, Field } from './Form.types';

export const useForm = (schema: Field[]) => {


  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const initialValues = schema.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {} as Record<string, string>);
    setValues(initialValues)
  }, [])

  const validate = (values: Record<string, string>): Errors => {
    let errors: Errors = {};

    schema.forEach((field) => {
      if (field.required && !values[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
      if (field.type === 'email' && values[field.name] && !/\S+@\S+\.\S+/.test(values[field.name])) {
        errors[field.name] = `${field.label} is invalid`;
      }
    });

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const isFormValid = (): boolean => {
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      return true;
    } else {
      setErrors(validationErrors);
      return false;
    }
  };

  return {
    values,
    errors,
    handleChange,
    isFormValid,
  };
};

