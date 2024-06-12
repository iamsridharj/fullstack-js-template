import React from 'react';
import { render, fireEvent } from 'src/utils/testHelpers';
import { TextInput } from './TextInput';

describe('TextInput Unit Tests', () => {
    it('renders with default aria-label', () => {
        const { getByLabelText } = render(
            <TextInput type="text" value="test" onChange={() => { }} />
        );
        expect(getByLabelText('text input')).toBeInTheDocument();
    });

    it('renders with provided aria-label', () => {
        const { getByLabelText } = render(
            <TextInput type="text" value="test" ariaLabel="custom label" onChange={() => { }} />
        );
        expect(getByLabelText('custom label')).toBeInTheDocument();
    });

    it('calls onChange handler on input change', () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(
            <TextInput type="text" value="test" onChange={handleChange} />
        );

        fireEvent.change(getByLabelText('text input'), { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders with transparent border when transparentBorder is true', () => {
        const { getByLabelText } = render(
            <TextInput type="text" value="test" onChange={() => { }} transparentBorder />
        );
        expect(getByLabelText('text input')).toHaveStyle('border: 1px solid transparent');
    });

    it('renders with additional props', () => {
        const { getByPlaceholderText } = render(
            <TextInput
                type="text"
                value="test"
                onChange={() => { }}
                placeholder="Enter text here"
            />
        );
        expect(getByPlaceholderText('Enter text here')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <TextInput
                type="text"
                value="test"
                onChange={() => { }}
                placeholder="Enter text here"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
