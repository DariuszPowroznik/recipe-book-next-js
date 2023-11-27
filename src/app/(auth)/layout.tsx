'use client';
import { AuthenticationLayout } from 'src/components/templates/Authentication';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
