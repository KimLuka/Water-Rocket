type ButtonProps = {
  type: 'submit' | 'reset' | 'button' | undefined;
  buttonLabel: string;
  className?: string;
};

export default function Button({
  type,
  buttonLabel,
  className = '',
}: ButtonProps) {
  // const colorClass = ButtonColors[color];
  // const sizeClass = ButtonSizes[size];

  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center 
        h-10 px-4 py-2 whitespace-nowrap text-sm font-medium
        transition-colors disabled:pointer-events-none text-white bg-custom-light-green disabled:opacity-50 rounded-md ${className}`}
    >
      {buttonLabel}
    </button>
  );
}
