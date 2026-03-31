import { Controller, useForm } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { applyVacationReq } from "./https/timeClock";
import DatePicker from "react-datepicker";

// 1. IS LINE KO ZAROOR ADD KAREIN (Yehi UI theek karega)
import "react-datepicker/dist/react-datepicker.css";

const VacationRequest = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("📦 Request Data:", data);
    await applyVacationReq(data);
  };

  return (
    <div>
      <div className="p-7 mt-8">
        <div>
          <h1 className="font-bold text-[20px] md:text-[24px] text-black">
            Vacation Request
          </h1>
        </div>

        {/* Breadcrumbs */}
        <div className="flex justify-between mt-2 items-center">
          <div className="flex gap-4 items-center ">
            <p className={`text-xs text-black`}>
              <NavLink to={"/dashboardDetailes"}>Dashboard</NavLink>
            </p>
            <span>
              <FaCircle className="text-[6px] text-gray-500" />
            </span>
            <span className="text-xs hover:cursor-pointer">time O’clock</span>
            <span>
              <FaCircle className="text-[6px] text-gray-500" />
            </span>
            <span className="text-xs hover:cursor-pointer">
              Vacation Request
            </span>
          </div>
        </div>

        <div className="mt-4 bg-white p-2 sm:p-6 w-full rounded-2xl xl:w-2/3 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white w-full rounded-2xl ">
              <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-6">
                {/* Start Date */}
                <div className="w-full">
                  <label className="font-semibold block mb-2 text-gray-700">Start Date</label>
                  <Controller
                    control={control}
                    name="startDate"
                    rules={{ required: "Start date is required" }}
                    render={({ field }) => (
                      <DatePicker
                        placeholderText="MM/DD/YYYY"
                        // wrapperClassName="w-full" add karne se width sahi hogi
                        wrapperClassName="w-full"
                        className="border border-gray-300 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat="MM/dd/yyyy"
                        autoComplete="off"
                      />
                    )}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.startDate.message)}
                    </p>
                  )}
                </div>

                {/* End Date */}
                <div className="w-full">
                  <label className="font-semibold block mb-2 text-gray-700">End Date</label>
                  <Controller
                    control={control}
                    name="endDate"
                    rules={{ required: "End date is required" }}
                    render={({ field }) => (
                      <DatePicker
                        placeholderText="MM/DD/YYYY"
                        wrapperClassName="w-full"
                        className="border border-gray-300 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        dateFormat="MM/dd/yyyy"
                        autoComplete="off"
                      />
                    )}
                  />
                  {errors.endDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.endDate.message)}
                    </p>
                  )}
                </div>
              </div>

              {/* How Many Hours */}
              <div className="w-full mb-6">
                <label className="font-semibold block mb-2 text-gray-700">How Many Hours</label>
                <input
                  {...register("hours", {
                    required: "Please enter hours",
                    min: { value: 1, message: "Hours must be at least 1" },
                  })}
                  type="number"
                  placeholder="Enter Hours"
                  className="border border-gray-300 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.hours && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.hours.message)}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div className="w-full mb-6">
                <label className="font-semibold block mb-2 text-gray-700">Notes</label>
                <textarea
                  {...register("notes", {
                    required: "Note is required",
                  })}
                  rows={3}
                  placeholder="Enter Note"
                  className="border border-gray-300 py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.notes && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.notes.message)}
                  </p>
                )}
              </div>

              {/* Button */}
              <div className="mt-6 text-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3 rounded-lg font-medium shadow-md"
                >
                  Request Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VacationRequest;