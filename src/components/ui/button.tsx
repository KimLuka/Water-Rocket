type ButtonProps = {
  type: 'submit' | 'reset' | 'button' | undefined;
  buttonLabel: string;
  className?: string;
};

export default function Button({ type, buttonLabel, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex justify-center items-center bg-custom-dark-green w-75 p-4 rounded-lg text-lg font-bold md:text-xl md:w-120 md:font-bold ${className}`}
    >
      {buttonLabel}
    </button>
  );
}
