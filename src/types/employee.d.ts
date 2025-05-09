export interface Employee {
    name: string;
    email: string;
    phone?: string;
    role: 'Developer' | 'Designer' | 'Manager';
    joiningDate: string;
  }
  