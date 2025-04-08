import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmpService from "../Services/EmpService";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmpService.getEmployees();
        setEmployees(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmpService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen justify-center items-center flex flex-col">
        <div>
          <button
            onClick={() => navigate("/addEmployee")}
            className="bg-slate-600 hover:bg-blue-700 mx-40 my-12 font-semibold px-20 py-2 rounded hover:cursor-pointer"
          >
            Add Employee
          </button>
        </div>
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="shadow w-full">
            <thead className="bg-slate-600">
              <tr>
                <th className="px-6 py-3 uppercase tracking-wide">Name</th>
                <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
                <th className="px-6 py-3 uppercase tracking-wide">Email</th>
                <th className="px-6 py-3 uppercase tracking-wide">Action</th>
              </tr>
            </thead>

            <tbody>
              {!loading &&
                employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-blue-600 hover:text-white bg-white text-black"
                  >
                    <td className="text-left px-6 py-3 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="text-left px-6 py-3 whitespace-nowrap">
                      {employee.phone}
                    </td>
                    <td className="text-left px-6 py-3 whitespace-nowrap">
                      {employee.email}
                    </td>
                    <td className=" px-6 py-3 whitespace-nowrap text-center">
                      <a
                        className="hover:text-orange-500 hover:cursor-pointer"
                        onClick={(e, id) => editEmployee(e, employee.id)}
                      >
                        Edit 📝
                      </a>
                      &nbsp;&nbsp;
                      <a
                        className="hover:text-red-500 hover:cursor-pointer"
                        onClick={(e, id) => deleteEmployee(e, employee.id)}
                      >
                        Delete ❌
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
