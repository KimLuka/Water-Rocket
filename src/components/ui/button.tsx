type ButtonProps = {
  type: 'submit' | 'reset' | 'button' | undefined;
  buttonLabel: string;
  className?: string;
};

export default function Button({ type, buttonLabel, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center 
        h-10 px-4 py-2 whitespace-nowrap text-sm font-medium
        transition-colors disabled:pointer-events-none bg-white disabled:opacity-50 rounded-md ${className}`}
    >
      {buttonLabel}
    </button>
  );
}
