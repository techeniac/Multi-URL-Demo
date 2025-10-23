export type UserRole = "admin" | "provider";

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export const hasAccess = (user: User | null, requiredRole: UserRole): boolean => {
  if (!user) return false;
  return user.role === requiredRole;
};
