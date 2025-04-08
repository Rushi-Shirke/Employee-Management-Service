import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmpService from "../Services/EmpService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handelChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmpService.saveEmployee(employee)
      .then((res) => {
        console.log("saved", res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full bg-slate-800 my-10 rounded shadow py-4 px-6">
        <div className="text-3xl sm:text-4xl tracking-wider font-bold text-center py-4 px-8">
          <p>Add New Employee</p>
        </div>

        <div className="sm:mx-10 mx-2 my-2">
          <input
            type="text"
            name="name"
            onChange={(e) => handelChange(e)}
            value={employee.name}
            className="w-full py-2 my-2 text-slate-800 bg-white rounded placeholder:pl-4"
            placeholder="Name"
          ></input>
          <input
            type="number"
            name="phone"
            value={employee.phone}
            onChange={(e) => handelChange(e)}
            className="w-full py-2 my-2 text-slate-800 bg-white rounded placeholder:pl-4"
            placeholder="Phone"
          ></input>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handelChange(e)}
            className="w-full py-2 my-2 text-slate-800 bg-white rounded placeholder:pl-4"
            placeholder="Email"
          ></input>
        </div>
        <div className="flex flex-wrap justify-center my-4 gap-4">
          <button
            onClick={saveEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
