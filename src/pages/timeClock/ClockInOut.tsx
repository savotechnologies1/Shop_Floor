// import { useEffect, useState } from "react";
// import img from "../../assets/arrow-right.png";
// import dp from "../../assets/dp_1.png";
// import { employeeTimeLineDetail } from "./https/timeClock";
// import QuickPunch from "./QuickPunch";
// import Timeline from "./TimeLine";
// const ClockInOut = () => {
//   // States (remain the same)
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [status, setStatus] = useState("LOADING");
//   const [lastPunch, setLastPunch] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [employeeData, setEmployeeData] = useState(false);
//   const fetchStatus = async () => {
//     setIsLoading(true);
//     try {
//       // Axios GET request. The response data is in `response.data`
//       const response = await employeeTimeLineDetail();
//       console.log("responseresponse", response.data);
//       setEmployeeData(response.data.data);

//       setStatus(response.data.status);
//       setLastPunch(response.data.lastPunch);
//     } catch (err) {
//       // Axios provides more detailed error objects
//       const errorMessage =
//         err.response?.data?.error ||
//         "Failed to fetch status. Please try again.";
//       setError(errorMessage);
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchStatus();
//   }, []);

//   const currentDate = new Date();

//   const options = {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   };

//   const formattedDate = currentDate
//     .toLocaleDateString("en-US", options)
//     .replace(",", "");

//   return (
//     <>
//       <div className="bg-[#243C75] p-4 text-end pb-10">
//         <h1 className="text-2xl text-white">{formattedDate}</h1>
//         <p className="text-lg text-white">Today</p>
//       </div>
//       <div className="bg-[#17274C] flex text-white text-xs p-2 justify-between">
//         <p>Clock In And Out</p>
//         <img src={img} alt="" />
//       </div>

//       <div className="flex flex-col xl:flex-row p-6 justify-between gap-10">
//         <div className="w-full sm:w-[80%] md:w-[100%] lg:w-[50%] xl:w-[40%] bg-white shadow-lg rounded-2xl py-6 sm:py-10 px-4 sm:px-6 text-center">
//           {/* Profile Image */}
//           <div className="flex justify-center">
//             <img
//               className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-[#d1a822] object-cover"
//               src={dp}
//               alt="Profile"
//             />
//           </div>

//           {/* User Info */}
//           <div className="mt-3 sm:mt-4">
//             <p className="text-gray-600 text-xs sm:text-sm">#15652542</p>
//             <h2 className="text-base sm:text-lg font-bold mt-1">
//               {employeeData.firstName} {employeeData.lastName}
//             </h2>
//             <p className="text-gray-600 text-xs sm:text-sm mt-1">
//               Process/Inspection
//             </p>
//           </div>

//           {/* Details */}
//           <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-4 ">
//             <div className="col-span-2 sm:col-span-1">
//               <p className="text-xs text-gray-500">Joined</p>
//               <p className="text-sm  font-semibold mt-1">
//                 {employeeData.startDate}
//               </p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-500">Contact No.</p>
//               <p className="text-sm  font-semibold mt-1">
//                 {" "}
//                 {employeeData.phoneNumber === null
//                   ? "Not Available"
//                   : employeeData.phoneNumber}
//               </p>
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               <p className="text-xs text-gray-500">Email</p>
//               <p className="text-sm  font-semibold mt-1 truncate">
//                 {employeeData.email}
//               </p>
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               <p className="text-xs text-gray-500">Contact No.</p>
//               <p className="text-sm  font-semibold mt-1">
//                 {employeeData.phoneNumber === null
//                   ? "Not Available"
//                   : employeeData.phoneNumber}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full xl:w-[60%] ">
//           {" "}
//           <QuickPunch employeeId={employeeData.id} />
//         </div>
//       </div>
//       <div className="p-6 ">
//         <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 ">
//           <Timeline />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClockInOut;

// Import FC (Functional Component) type from React for type-safety
import { FC, useEffect, useState } from "react";
import img from "../../assets/arrow-right.png";
import dp from "../../assets/dp_1.png";
import { employeeTimeLineDetail } from "./https/timeClock";
import QuickPunch from "./QuickPunch";
import Timeline from "./TimeLine";

// --- TYPE DEFINITIONS ---
// Define a type for the employee data object to ensure type safety
interface EmployeeData {
  id: number;
  firstName: string;
  lastName: string;
  startDate: string;
  phoneNumber: string | null;
  email: string;
}

// Define possible statuses for better type checking
type ClockStatus = "LOADING" | "CLOCKED_IN" | "CLOCKED_OUT" | string;

const ClockInOut: FC = () => {
  // Use the ClockStatus type for the status state
  const [status, setStatus] = useState<ClockStatus>("LOADING");

  // lastPunch can be an object or null. 'any' is used here as its shape is not defined.
  const [lastPunch, setLastPunch] = useState<any | null>(null);

  const [isLoading, setIsLoading] = useState(true); // Start with true since we fetch on mount

  // The error can be a string or null
  const [error, setError] = useState<string | null>(null);
  console.log(error, lastPunch, status);

  // CRITICAL FIX: Initialize employeeData with `null` instead of `false` and apply the EmployeeData type
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null);

  const fetchStatus = async () => {
    // No need to set isLoading here if initialized to true
    try {
      const response = await employeeTimeLineDetail();

      setEmployeeData(response.data.data);
      setStatus(response.data.status);
      setLastPunch(response.data.lastPunch);
    } catch (err: any) {
      // Type the error object
      const errorMessage =
        err.response?.data?.error ||
        "Failed to fetch status. Please try again.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // --- DATE FORMATTING (remains the same) ---
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const formattedDate = currentDate
    .toLocaleDateString("en-US", options)
    .replace(",", "");

  return (
    <>
      <div className="bg-[#243C75] p-4 text-end pb-10">
        <h1 className="text-2xl text-white">{formattedDate}</h1>
        <p className="text-lg text-white">Today</p>
      </div>
      <div className="bg-[#17274C] flex text-white text-xs p-2 justify-between">
        <p>Clock In And Out</p>
        <img src={img} alt="" />
      </div>

      <div className="flex flex-col xl:flex-row p-6 justify-between gap-10">
        <div className="w-full sm:w-[80%] md:w-[100%] lg:w-[50%] xl:w-[40%] bg-white shadow-lg rounded-2xl py-6 sm:py-10 px-4 sm:px-6 text-center">
          <div className="flex justify-center">
            <img
              className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-[#d1a822] object-cover"
              src={dp}
              alt="Profile"
            />
          </div>

          {/* User Info - Safely access properties with optional chaining */}
          <div className="mt-3 sm:mt-4">
            <p className="text-gray-600 text-xs sm:text-sm">#15652542</p>
            <h2 className="text-base sm:text-lg font-bold mt-1">
              {isLoading
                ? "Loading..."
                : `${employeeData?.firstName ?? ""} ${
                    employeeData?.lastName ?? ""
                  }`}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Process/Inspection
            </p>
          </div>

          {/* Details - Use optional chaining and nullish coalescing for safety */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-y-4 gap-x-4">
            <div>
              <p className="text-xs text-gray-500">Joined</p>
              <p className="text-sm font-semibold mt-1">
                {employeeData?.startDate ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Contact No.</p>
              <p className="text-sm font-semibold mt-1">
                {employeeData?.phoneNumber ?? "Not Available"}
              </p>
            </div>
            {/* Make email span full width for better layout */}
            <div className="col-span-2">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-semibold mt-1 truncate">
                {employeeData?.email ?? "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[60%]">
          {/* Conditionally render QuickPunch only when employeeData is loaded */}
          {employeeData?.id && <QuickPunch employeeId={employeeData.id} />}
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default ClockInOut;
