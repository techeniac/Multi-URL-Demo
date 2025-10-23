import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ background: '#222', color: '#fff', padding: 16 }}>
        Admin Panel
      </header>
      <main>{children}</main>
    </div>
  );
}
