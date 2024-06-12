export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ariaLabel?: string
  transparentBorder?: boolean;
  isError?: boolean;
}
