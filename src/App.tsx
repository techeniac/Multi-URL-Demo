import AdminLayout from './layouts/AdminLayout';
import ProviderLayout from './layouts/ProviderLayout';
import Dashboard from './modules/admin/Dashboard';
import Home from './modules/provider/Home';
import { getAppType } from './utils/domainConfig';

export default function App() {
  const appType = getAppType();

  if (appType === 'admin') {
    return (
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    );
  }

  if (appType === 'provider') {
    return (
      <ProviderLayout>
        <Home />
      </ProviderLayout>
    );
  }

  // Default view if not admin/provider domain
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Welcome to Multi-URL Demo</h2>
      <p>This is the default screen.</p>
      <p>Try visiting:</p>
      <ul>
        <li><b>admin.yourdomain.com</b> — Admin dashboard</li>
        <li><b>provider.yourdomain.com</b> — Provider homepage</li>
      </ul>
    </div>
  );
}
