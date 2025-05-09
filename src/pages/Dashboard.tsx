import { useState, useEffect } from 'react';
import EmployeeForm from '@/components/EmployeeForm';
import EmployeeGrid from '@/components/EmployeeGrid';
import { getEmployeesFromStorage } from '@/hooks/useEmployeeData';
import type { Employee } from '@/types/employee';

const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const data = getEmployeesFromStorage();
    setEmployees(data);
  }, []);

  const handleEmployeeAdded = () => {
    const data = getEmployeesFromStorage();
    setEmployees(data);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 w-full">
          <div className="p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-4">Employee Form</h2>
            <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="p-6 rounded-xl shadow-md border">
            <h2 className="text-lg font-semibold mb-4">Employee Data in a Grid</h2>
            <EmployeeGrid employees={employees} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
