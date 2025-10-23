export const domainConfig = {
  admin: "admin.developmentservers.in",
  provider: "provider.developmentservers.in",
};

export const getAppType = (): "admin" | "provider" | "default" => {
  const host = window.location.hostname;
  if (host.includes("admin")) return "admin";
  if (host.includes("provider")) return "provider";
  return "default";
};
