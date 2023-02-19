import { Paper } from '@mui/material';
import { PropsWithChildren } from 'react';
import './header.css';

interface Props {}

export default function Header({ children }: PropsWithChildren<Props>) {
  return (
    <Paper elevation={4} className="header">
      <div className="container">{children}</div>
    </Paper>
  );
}
