export interface LogoutRepository {
  logout: () => Promise<void>;
}
