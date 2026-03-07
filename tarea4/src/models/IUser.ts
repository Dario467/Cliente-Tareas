export enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer"
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}

export type PublicUser = Omit<IUser, "email">;
export type UserUpdate = Partial<IUser>;