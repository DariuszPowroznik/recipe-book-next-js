'use client';
import { Container } from '@mui/material';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="sm">{children}</Container>;
}
