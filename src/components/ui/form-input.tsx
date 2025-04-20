import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

// 패턴 관련
type PatternValidation = {
  patternValue?: RegExp;
  patternMessage?: string;
};

// 길이 관련
type LengthValidation = {
  minLength?: boolean;
  minLengthValue?: number;
  minLengthMessage?: string;
  maxLength?: boolean;
  maxLengthValue?: number;
  maxLengthMessage?: string;
};

// 커스텀 검증 관련
type CustomValidation = {
  validate?: (value: string) => boolean | string;
};

type FormInputProps<T extends FieldValues> = {
  inputLabel: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<T>;
  registerName: Path<T>;
  required: boolean;
  errors: FieldErrors<T>;
} & PatternValidation &
  LengthValidation &
  CustomValidation;

export default function FormInput<T extends FieldValues>({
  inputLabel,
  htmlFor,
  type,
  placeholder,
  register,
  registerName,
  required,
  patternValue,
  patternMessage,
  minLength,
  minLengthValue,
  minLengthMessage,
  maxLength,
  maxLengthValue,
  maxLengthMessage,
  validate,
  errors,
}: FormInputProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-lg font-bold md:text-xl">
        {inputLabel}
      </label>
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        className="p-4 text-lg font-bold rounded-lg h-15 border-1 border-custom-dark-green bg-custom-gray md:text-xl"
        {...register(registerName, {
          required: required ? '필수 입력 항목입니다' : false,
          pattern:
            patternValue && patternMessage
              ? {
                  value: new RegExp(patternValue),
                  message: `${patternMessage}`,
                }
              : undefined,
          minLength:
            minLength && minLengthValue && minLengthMessage
              ? {
                  value: minLengthValue,
                  message: minLengthMessage,
                }
              : undefined,
          maxLength:
            maxLength && maxLengthValue && maxLengthMessage
              ? {
                  value: maxLengthValue,
                  message: maxLengthMessage,
                }
              : undefined,
          ...(validate && { validate }),
        })}
      />
      {errors[registerName] && (
        <p className="text-lg text-custom-orange md:text-xl">
          {errors[registerName].message as string}
        </p>
      )}
    </div>
  );
}
