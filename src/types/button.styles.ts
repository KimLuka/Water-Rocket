type ButtonType = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const ButtonColors: Record<ButtonType, string> = {
  primary: 'bg-custom-light-green text-white hover:bg-custom-dark-green',
  secondary: 'bg-white border border-custom-gray hover:bg-custom-gray',
  danger: 'bg-custom-red text-white',
};

export const ButtonSizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-8 text-lg',
};
