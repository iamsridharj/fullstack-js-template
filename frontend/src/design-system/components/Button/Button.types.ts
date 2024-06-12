import { ReactNode } from 'react'

export interface ButtonProps {
  icon?: ReactNode
  variant?: 'default' | 'danger' | 'success'
  iconPosition?: 'left' | 'right'
  ariaLabel?: string
  onClick?: () => void
}
