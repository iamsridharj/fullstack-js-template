import { render, screen } from 'src/utils/testHelpers';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders the button with correct aria-label and tabIndex', () => {
        render(<Button ariaLabel="test-label">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'button');
        expect(button).toHaveAttribute('tabIndex', '0');
        expect(button).toHaveAttribute('aria-label', 'test-label');
    });

    it('renders default aria-label when none is provided', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label', 'btn');
    });

    it('includes the icon when provided', () => {
        const Icon = () => <span>Icon</span>;
        render(<Button icon={<Icon />}>Click me</Button>);
        const button = screen.getByRole('button');
        const icon = screen.getByText('Icon');
        expect(button).toContainElement(icon);
    });

    it('positions the icon correctly when iconPosition is specified', () => {
        const Icon = () => <span>Icon</span>;
        render(<Button icon={<Icon />} iconPosition="left">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle(`flex-direction: row-reverse`);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Button>Click me</Button>);
        expect(asFragment()).toMatchSnapshot();
    });
});
