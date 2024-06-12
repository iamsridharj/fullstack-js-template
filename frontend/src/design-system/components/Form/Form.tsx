import React from 'react';
import { Errors, Field } from './Form.types';
import { TextInput } from './TextInput/TextInput';
import { StyledForm } from './Form.styled';

interface FormProps {
  schema: Field[];
  values: Record<string, string>;
  errors: Errors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form: React.FC<FormProps> = ({ schema, values, errors, handleChange }) => {
  return (
    <StyledForm>
      {schema.map((field) => (
        <TextInput
          key={field.name}
          type={field.type}
          name={field.name}
          value={values[field.name]}
          placeholder={field.placeholder}
          onChange={handleChange}
          transparentBorder={field.transparentBorder}
          isError={!!errors[field.name]}
          aria-invalid={!!errors[field.name]}
          aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
        />
      ))}
    </StyledForm>
  );
};
