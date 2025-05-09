import emailjs from 'emailjs-com';
import type { Employee } from '@/types/employee';

export const sendEmployeeEmail = async (employee: Employee): Promise<void> => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    {
      name: employee.name,
      email: employee.email,
      phone: employee.phone || 'N/A',
      role: employee.role,
      joiningDate: employee.joiningDate,
    },
    import.meta.env.VITE_EMAILJS_USER_ID!
  );
};
