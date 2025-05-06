export interface InputContextType {
  id: string;
  value: string;
  type?: string;
  description?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DescriptionProps {
  srOnly?: boolean;
}
