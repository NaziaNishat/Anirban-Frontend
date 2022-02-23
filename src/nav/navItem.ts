export type NavItemSchema = {
  name: string;
  url?: string;
  action?: () => void;
};
