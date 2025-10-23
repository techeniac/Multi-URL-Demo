export type AppType = 'admin' | 'provider' | 'default';

export const getAppType = (): AppType => {
  if (typeof window === 'undefined') return 'default';
  const host = 'provider.demo.com';
  if (host.includes('admin')) return 'admin';
  if (host.includes('provider')) return 'provider';
  return 'default';
};
