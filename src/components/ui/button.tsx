type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  className?: string;
};

export default function Button({
  type = 'button',
  children,
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  className,
}: ButtonProps) {
  const classArray = [
    // 기본 스타일
    'inline-flex justify-center items-center rounded whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',

    // 버튼 크기 (size)
    size === 'sm' && 'h-8 px-3 py-4.25 text-sm font-semibold',
    size === 'md' && 'h-10 px-5 py-5 text-md font-semibold',
    size === 'lg' && 'h-12 px-8 py-8 text-lg font-semibold',

    // 버튼 변형 (variant)
    variant === 'primary' &&
      'text-white bg-custom-light-green hover:bg-custom-dark-green',
    variant === 'secondary' &&
      'text-custom-light-green bg-white border border-custom-gray hover:bg-custom-gray',
    variant === 'outline' &&
      'bg-white border border-custom-gray hover:bg-custom-gray',

    // 비활성화 상태
    isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
  ];

  // filter로 falsy 값 제거 후 join으로 문자열로 변환
  const buttonClasses = [...classArray.filter(Boolean), className]
    .filter(Boolean)
    .join(' ');

  console.log('buttonClasses:', className);

  return (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
}
