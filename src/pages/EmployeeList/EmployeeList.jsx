import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employeeData = useSelector((state) => state.employee);
  const employees = employeeData.employees;

  console.log(employees, "employees in employee list");

  const data = useMemo(() => {
    return employees.map((employee) => {
      return { ...employee };
    });
  }, [employees]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        size: 150,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 150,
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
        size: 150,
      },
      {
        accessorKey: "street",
        header: "Street",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="h-[100vh] bg-green-300">
      <h1 className="flex items-center justify-center pt-10 text-4xl font-bold text-white">
        Employee List
      </h1>
      <div className="mt-10 mb-20">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export { EmployeeList };
