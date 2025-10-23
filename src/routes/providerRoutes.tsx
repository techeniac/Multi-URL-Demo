import Payments from "@/modules/provider/Payments";
import Services from "@/modules/provider/Services";


interface RouteType {
  path: string;
  element: React.FC;
}

const providerRoutes: RouteType[] = [
  { path: "/services", element: Services },
  { path: "/payments", element: Payments },
];

export default providerRoutes;
