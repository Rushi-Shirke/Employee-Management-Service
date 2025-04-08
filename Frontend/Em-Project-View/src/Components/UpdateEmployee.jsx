import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpService from "../Services/EmpService";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmpService.getEmployeeById(employee.id);
        setEmployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handelChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmpService.updateEmployee(employee, id)
      .then((res) => {
        console.log("saved", res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl  bg-slate-800 my-20 rounded shadow py-4 px-6">
        <div className="sm:text-4xl text-3xl tracking-wider font-bold text-center py-4 px-8">
          <p>Update Employee</p>
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
            onClick={updateEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
          >
            Update
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

export default UpdateEmployee;
