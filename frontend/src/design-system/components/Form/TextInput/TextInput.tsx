import React from "react";
import { StyledTextInput } from "./TextInput.styled"
import { TextInputProps } from "./TextInput.types"

export const TextInput: React.FC<TextInputProps> = ({ type, value, ariaLabel, onChange, transparentBorder, ...props }) => {

    return (
        <StyledTextInput
            type={type}
            value={value}
            aria-label={ariaLabel || 'text input'}
            onChange={(e) => onChange(e)}
            $transparentBorder={!!transparentBorder}
            {...props}
        />
    )
}