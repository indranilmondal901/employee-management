import type { Employee } from '../types/employee';

const STORAGE_KEY = 'employees';

export const getEmployeesFromStorage = (): Employee[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addEmployeeToStorage = (employee: Employee): void => {
  const current = getEmployeesFromStorage();
  const updated = [...current, employee];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};