'use client';

import { ThemeProvider } from 'next-themes';

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"  // <-- THIS is the magic: sets `dark` class on <html>
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
