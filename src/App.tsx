import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getAppType } from "./utils/domainConfig";
import AdminLayout from "./layouts/AdminLayout";
import ProviderLayout from "./layouts/ProviderLayout";
import adminRoutes from "./routes/adminRoutes";
import providerRoutes from "./routes/providerRoutes";

const App: React.FC = () => {
  const appType = getAppType();

  const renderRoutes = (routes: { path: string; element: React.FC }[], Layout: React.FC<{ children: React.ReactNode }>) => (
    <Layout>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path="*" element={<Navigate to={routes[0].path} />} />
      </Routes>
    </Layout>
  );

  return <Router>{appType === "admin" ? renderRoutes(adminRoutes, AdminLayout) : renderRoutes(providerRoutes, ProviderLayout)}</Router>;
};

export default App;
