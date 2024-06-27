import {
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useDispatch } from "react-redux";
import { departments } from "../../data/Departments";
import { states } from "../../data/States";
import { addEmployee } from "../../reducers/employees";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let newEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: format(dateOfBirth, "dd/MM/yyyy"),
      startDate: format(startDate, "dd/MM/yyyy"),
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };
    console.log(newEmployee, "NEW EMPLOYEEEE");

    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className="pt-10">
      <div>
        <div className="container m-auto">
          <form
            onSubmit={handleSubmit}
            action="#"
            id="create-employee"
            className="flex justify-around w-full"
          >
            <div>
              <h1 className="flex items-center justify-center p-2 font-bold text-center text-green-400 uppercase bg-white rounded-full shadow-sm">
                Personal informations
              </h1>
              <div className="flex flex-col p-8 mt-5 bg-white rounded-md shadow-md">
                <label className="font-bold text-center" htmlFor="first-name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                />

                <label htmlFor="last-name" className="font-bold text-center">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                />

                <label
                  htmlFor="date-of-birth"
                  className="font-bold text-center"
                >
                  Date of Birth
                </label>

                <Popover placement="bottom">
                  <PopoverHandler>
                    <input
                      id="date-of-birth"
                      type="date"
                      className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                      onChange={(event) =>
                        setDateOfBirth(new Date(event.target.value))
                      }
                      value={format(dateOfBirth, "yyyy-MM-dd")}
                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={dateOfBirth}
                      onSelect={setDateOfBirth}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption:
                          "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm font-medium text-gray-900",
                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <div {...props} className="w-4 h-4 stroke-2">
                            {"<"}
                          </div>
                        ),
                        IconRight: ({ ...props }) => (
                          <div {...props} className="w-4 h-4 stroke-2">
                            {">"}
                          </div>
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>

                <label htmlFor="start-date" className="font-bold text-center">
                  Start Date
                </label>

                <Popover placement="bottom">
                  <PopoverHandler>
                    <input
                      readOnly
                      id="start-date"
                      type="date"
                      className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                      onChange={(event) =>
                        setStartDate(new Date(event.target.value))
                      }
                      value={format(startDate, "yyyy-MM-dd")}
                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption:
                          "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm font-medium text-gray-900",
                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <div {...props} className="w-4 h-4 stroke-2">
                            {"<"}
                          </div>
                        ),
                        IconRight: ({ ...props }) => (
                          <div {...props} className="w-4 h-4 stroke-2">
                            {">"}
                          </div>
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <h1 className="flex items-center justify-center p-2 font-bold text-center text-green-400 uppercase bg-white rounded-full shadow-sm">
                Address
              </h1>
              <div className="flex flex-col p-8 mt-5 bg-white rounded-md shadow-md">
                <fieldset className="address">
                  <label htmlFor="street" className="font-bold text-center">
                    Street
                  </label>
                  <input
                    id="street"
                    type="text"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                    className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                  />

                  <label htmlFor="city" className="font-bold text-center">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                  />

                  <label htmlFor="state" className="font-bold text-center">
                    State
                  </label>
                  <Select
                    name="state"
                    variant="static"
                    value={state}
                    aria-label="state"
                    onChange={(value) => {
                      setState(value);
                    }}
                  >
                    {states.map((state, index) => (
                      <Option key={index} value={state.name}>
                        {state.name}
                      </Option>
                    ))}
                  </Select>
                  <label htmlFor="zip-code" className="font-bold text-center">
                    Zip Code
                  </label>
                  <input
                    type="number"
                    name="zipCode"
                    aria-label="zipCode"
                    value={zipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                    className="w-full border-b border-gray-400 outline-none focus:border-green-400"
                  />
                </fieldset>
              </div>
            </div>
            <div>
              <h1 className="flex items-center justify-center p-2 font-bold text-center text-green-400 uppercase bg-white rounded-full shadow-sm">
                Department
              </h1>
              <div className="flex flex-col p-8 mt-5 bg-white rounded-md shadow-md">
                <label htmlFor="department" className="font-bold text-center">
                  Department
                </label>
                <Select
                  variant="static"
                  value={department}
                  name="department"
                  aria-label="department"
                  onChange={(value) => setDepartment(value)}
                >
                  {departments.map((department, index) => (
                    <Option key={index} value={department.name}>
                      {department.name}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </form>

          <button
            type="submit"
            form="create-employee"
            className="px-8 py-2 mt-10 font-bold text-green-400 bg-white rounded-full shadow-sm hover:bg-green-200 hover:text-black"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { Home };
