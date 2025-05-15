import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center transition-colors whitespace-nowrap focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
