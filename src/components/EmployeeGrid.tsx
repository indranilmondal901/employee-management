// import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
// import { getEmployeesFromStorage } from '@/hooks/useEmployeeData';
import type { ColDef } from 'ag-grid-community';
import type { Employee } from '@/types/employee';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register the required module
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const EmployeeGrid = ({ employees }: { employees: Employee[] }) => {
  // const [rowData, setRowData] = useState<Employee[]>([]);

  // useEffect(() => {
  //   const data = getEmployeesFromStorage();
  //   console.log(data)
  //   setRowData(data);
  // }, []);

  const columnDefs: ColDef<Employee>[] = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Phone Number', field: 'phone', sortable: true, filter: true },
    { headerName: 'Role', field: 'role', sortable: true, filter: true },
    { headerName: 'Joining Date', field: 'joiningDate', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%', marginTop: '2rem' }}>
      <AgGridReact
        rowData={employees}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};

export default EmployeeGrid;