// import { useState } from 'react';
// import { Input } from './input';

// type FormFieldProps = {
//   id: string;
//   label: string;
//   placeholder?: string;
//   type?: string;
//   description?: string;
//   validate?: (value: string) => string | null;
//   debounceDelay?: number;
// };

// export default function FormField({
//   id,
//   label,
//   placeholder = '',
//   type = 'text',
//   description,
//   validate,
//   debounceDelay = 500,
// }: FormFieldProps) {
//   const [inputValue, setInputValue] = useState(value);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setInputValue(newValue);
//   };

//   return (
//     <div>
//       <label htmlFor={id}>이메일</label>
//       <p id={`${id}-desc`} className="sr-only">
//         {description}
//       </p>
//       <Input
//         id={id}
//         type={type}
//         aria-describedby={description ? `${id}-desc` : undefined}
//         placeholder={placeholder}
//         value={inputValue}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
