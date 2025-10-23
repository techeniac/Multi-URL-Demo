import type { ReactNode } from 'react';

export default function ProviderLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ background: '#0a6', color: '#fff', padding: 16 }}>
        Provider Panel
      </header>
      <main>{children}</main>
    </div>
  );
}
