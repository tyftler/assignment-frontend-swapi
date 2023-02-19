import { ChangeEventHandler } from 'react';

interface Props {
  options: { value: string; label: string }[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({ options, value, onChange }: Props) {
  return (
    <select value={value} onChange={onChange} className="select">
      {options.map(option => (
        <option key={`option-${option.value}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
