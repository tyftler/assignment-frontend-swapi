import { ChangeEvent } from 'react';

interface Props {
  year: string;
  isBby: boolean;
  onChange: (year: string, isBby: boolean) => void;
}

export default function YearInput({ year, isBby, onChange }: Props) {
  const onYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value, isBby);
  };
  const onIsBbyChange = () => {
    return onChange(year, !isBby);
  };

  return (
    <div className="year-input">
      <input value={year} placeholder="Year" onChange={onYearChange} />
      <button onClick={onIsBbyChange}>{isBby ? 'BBY' : 'ABY'}</button>
    </div>
  );
}
