export type User = {
  email: string;
  photoURL: string | null;
  provider?: string;
  displayName: string;
  isAdmin: boolean;
  createdAt: number;
  updatedAt: number;
};
