import AdminDashboard from "@/modules/admin/Dashboard";
import Reports from "@/modules/admin/Reports";


interface RouteType {
  path: string;
  element: React.FC;
}

const adminRoutes: RouteType[] = [
  { path: "/dashboard", element: AdminDashboard },
  { path: "/reports", element: Reports },
];

export default adminRoutes;
