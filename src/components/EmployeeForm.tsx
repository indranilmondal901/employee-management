import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { useEffect } from 'react';
import { addEmployeeToStorage } from '../hooks/useEmployeeData';
import { sendEmployeeEmail } from '../utils/sendEmail';
// import { format } from 'date-fns';

// Define Zod schema for validation
const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional().refine((val) => !val || /^[0-9]{10,15}$/.test(val), {
    message: 'Phone number must be 10-15 digits',
  }),
  role: z.enum(['Developer', 'Designer', 'Manager'], {
    errorMap: () => ({ message: 'Please select a valid role' }),
  }),
  joiningDate: z.string().refine((date) => {
    const parsed = new Date(date);
    return !isNaN(parsed.getTime()) && parsed <= new Date();
  }, {
    message: 'Joining date must be in the past or today',
  }),
});

type EmployeeFormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<EmployeeFormValues> = {
  name: '',
  email: '',
  phone: '',
  role: undefined,
  joiningDate: '',
};

const EmployeeForm = ({ onEmployeeAdded }: { onEmployeeAdded: () => void }) => {
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // const onSubmit = (data: EmployeeFormValues) => {
  //   // Save to localStorage
  //   addEmployeeToStorage(data);
    
  //   // Trigger email
  //   sendEmployeeEmail(data)
  //     .then(() => console.log('Email sent successfully!'))
  //     .catch((err) => console.error('Email failed to send:', err));

  //   form.reset();
  // };

  const onSubmit = (data: EmployeeFormValues) => {
    addEmployeeToStorage(data);

    sendEmployeeEmail(data)
      .then(() => console.log('Email sent successfully!'))
      .catch((err) => console.error('Email failed to send:', err));

    form.reset();

    // Notify parent
    onEmployeeAdded?.();
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Developer">Developer</SelectItem>
                    <SelectItem value="Designer">Designer</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="joiningDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Joining Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EmployeeForm;