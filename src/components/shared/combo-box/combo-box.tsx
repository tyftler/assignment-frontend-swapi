import { Autocomplete, TextField } from '@mui/material';

interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function ComboBox({ label, options, value, onChange }: Props) {
  return (
    <Autocomplete
      options={options}
      value={value || null}
      renderInput={props => <TextField {...props} label={label} />}
      className="combo-box"
      onChange={(_, val) => onChange(val ?? '')}
    />
  );
}
