export interface User {
  id: number;
  username: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  token: string;
}

interface Token {
  refresh: string;
  access: string;
}
