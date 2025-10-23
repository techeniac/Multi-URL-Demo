export const domainConfig = {
  admin: "admin.sena.com",
  provider: "provider.sena.com",
};

export const getAppType = (): "admin" | "provider" | "default" => {
  const host = window.location.hostname;
  if (host.includes("admin")) return "admin";
  if (host.includes("provider")) return "provider";
  return "default";
};
