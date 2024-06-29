import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmployeesArray } from "./Global";

export default function NewEmployee() {
  const maxSizeBytes = 500 * 1024;
  const [selectedFile, setSelectedFile] = useState(null);
  const Navigate = useNavigate();

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
    //excute if image is choosen ...............................................................
    if (event.target.image.files.length > 0) {
      if (!isFileTooLarge(event.target.image.files[0], maxSizeBytes)) {
        // Get the file input element
        const fileInput = event.target.image.files[0];
        // Read the file as a Data URL
        const reader = new FileReader();
        reader.readAsDataURL(fileInput);
        // Once the file is loaded
        reader.onload = async function () {
          // Get the base64-encoded image data
          const imageData = reader.result;

          // Construct the userData object with the base64 image data
          var employeeDetails = {
            serial: EmployeesArray.length + 1,
            Hospital:event.target.Hospital.value,
            photo: imageData,
            name: event.target.name.value,
            branch: event.target.branch.value,
            position: event.target.position.value,
            salary: event.target.salary.value,
            telephone: event.target.telephone.value,
            recruitmentDate: event.target.recruitmentDate.value,
          };
          EmployeesArray.push(employeeDetails);
          localStorage.setItem("EmployeesArray", JSON.stringify(EmployeesArray));
          Navigate("/employees");
        };
      } else {
        alert("Picture Is Too Large");
      }
    }
    //excute if image is Not choosen ...............................................................
    else {
      var employeeDetails = {
        serial: EmployeesArray.length + 1,
        photo: "NULL",
        Hospital:event.target.Hospital.value,
        name: event.target.name.value,
        branch: event.target.branch.value,
        position: event.target.position.value,
        salary: event.target.salary.value,
        telephone: event.target.telephone.value,
        recruitmentDate: event.target.recruitmentDate.value,
      };
      EmployeesArray.push(employeeDetails);
      localStorage.setItem("EmployeesArray", JSON.stringify(EmployeesArray));

      Navigate("/employees");
    }
    console.log(EmployeesArray);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            New Employee
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
