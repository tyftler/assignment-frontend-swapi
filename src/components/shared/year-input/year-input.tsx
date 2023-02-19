import ClearIcon from '@mui/icons-material/Clear';
import { Button, IconButton, TextField } from '@mui/material';
import { useRef } from 'react';
import './year-input.css';

interface Props {
  label: string;
  year: string;
  isBby: boolean;
  onChange: (year: string, isBby: boolean) => void;
}

export default function YearInput({ label, year, isBby, onChange }: Props) {
  const onYearChange = (value: string) => {
    return onChange(value, isBby);
  };
  const onIsBbyChange = () => {
    return onChange(year, !isBby);
  };

  const inputRef = useRef({} as HTMLInputElement);

  const TrailingButtons = (
    <>
      {year && (
        <IconButton
          onClick={() => {
            onYearChange('');
            inputRef.current.focus();
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      )}
      <Button variant="contained" color="secondary" onClick={onIsBbyChange}>
        {isBby ? 'BBY' : 'ABY'}
      </Button>
    </>
  );

  return (
    <TextField
      inputRef={inputRef}
      type="number"
      label={label}
      value={year}
      InputProps={{ endAdornment: TrailingButtons }}
      className="year-input"
      onChange={event => onYearChange(event.target.value)}
    />
  );
}
