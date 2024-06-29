import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeesArray } from "./Global";

export default function EditEmployee() {
  const maxSizeBytes = 500 * 1024;
  const [selectedFile, setSelectedFile] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const { serial } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const employee = EmployeesArray.find((e) => e.serial === parseInt(serial));
    if (employee) {
      setEmployeeData(employee);
    }
  }, [serial]);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
    const fileName = file ? file.name : "Choose Image";
    const input = event.target.parentNode.querySelector(".custom-file-label");
    input.textContent = fileName;
  }

  function isFileTooLarge(file, maxSizeBytes) {
    return file.size > maxSizeBytes;
  }

  function SaveUserData(event) {
    event.preventDefault();

    const updateEmployee = (photo = employeeData.photo) => {
      const updatedEmployeeDetails = {
        ...employeeData,
        photo,
        Hospital:event.target.Hospital.value,
        name: event.target.name.value,
        branch: event.target.branch.value,
        position: event.target.position.value,
        salary: event.target.salary.value,
        telephone: event.target.telephone.value,
        recruitmentDate: event.target.recruitmentDate.value,
      };

      const index = EmployeesArray.findIndex(
        (e) => e.serial === parseInt(serial)
      );
      if (index !== -1) {
        EmployeesArray[index] = updatedEmployeeDetails;
        navigate("/employees");
      }
    };

    // If image is chosen and valid, update with the new image
    if (event.target.image.files.length > 0) {
      if (!isFileTooLarge(event.target.image.files[0], maxSizeBytes)) {
        const fileInput = event.target.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(fileInput);
        reader.onload = function () {
          const imageData = reader.result;
          updateEmployee(imageData);
        };
      } else {
        alert("Picture Is Too Large");
      }
    } else {
      updateEmployee();
    }
  }

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Edit Employee
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={SaveUserData}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="recruitmentDate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Recruitment Date
              </label>
              <div className="mt-2">
                <input
                  id="recruitmentDate"
                  name="recruitmentDate"
                  type="date"
                  defaultValue={employeeData.recruitmentDate}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={employeeData.name}
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="branch"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Branch
              </label>
              <div className="mt-2">
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  defaultValue={employeeData.branch}
                  autoComplete="branch"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="position"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Position
              </label>
              <div className="mt-2">
                <input
                  id="position"
                  name="position"
                  type="text"
                  defaultValue={employeeData.position}
                  autoComplete="position"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="salary"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Salary
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  defaultValue={employeeData.salary}
                  autoComplete="salary"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="telephone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telephone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  defaultValue={employeeData.telephone}
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hospital Name 
                </label>
                <div className="mt-2">
                  <input
                    id="Hospital"
                    name="Hospital"
                    type="text"
                    defaultValue={employeeData.Hospital}
                    autoComplete="Hospital"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
          <div className="flex flex-wrap -mx-2"></div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label className="custom-file-label" htmlFor="image">
              {selectedFile ? selectedFile.name : "Choose Image"}
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
