// import { useNavigate } from "react-router-dom";
// import timer from "../../assets/timer.png";

// const QuickPunch = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
//     {/* Header */}
//     <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//       <h1 className="text-lg sm:text-xl font-bold">Quick Punch</h1>
//       <span className="bg-green-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap">
//         CLOCK IN
//       </span>
//     </div>

//     {/* Last Punch Info */}
//     <p className="text-orange-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center">
//       Last Punch was 2 hours ago.
//     </p>

//     {/* Static Timer */}
//     <div className="flex items-center justify-center my-3 sm:my-4 gap-2 sm:gap-4">
//       <img
//         src={timer}
//         alt="Timer"
//         className="w-6 h-6 sm:w-8 sm:h-8"
//       />
//       <span className="text-2xl sm:text-4xl font-bold">
//         02 : 50 : 26 PM
//       </span>
//     </div>

//     {/* Button Grid */}
//     <div className="grid grid-cols-2 gap-3 sm:gap-4 text-white text-xs sm:text-sm">
//       <button className="bg-[#00A76F] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         Clock In
//       </button>
//       <button className="bg-[#FF5630] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         Clock Out
//       </button>

//       <button className="bg-[#DC2800] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         Start Lunch
//       </button>
//       <button className="bg-[#049061] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         End Lunch
//       </button>

//       <button className="bg-[#AC2000] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         Start Exception
//       </button>
//       <button className="bg-[#006D49] hover:bg-black py-2 sm:py-3 rounded-full transition-colors">
//         End Exception
//       </button>

//       <button className="col-span-2 bg-[#243C75] hover:bg-black py-2 sm:py-3 rounded-full transition-colors"
//        onClick={() => navigate("/vaction-request")}>

//        Vacation Request
//       </button>
//     </div>
//   </div>
//   );
// };

// export default QuickPunch;

import { useState, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import timer from "../../assets/timer.png";
import {
  creeateEmployeeTimeLineApi,
  employeeTimeLineStatus,
} from "./https/timeClock";

// const QuickPunch = ({ employeeId }) => {
//   const navigate = useNavigate();

//   // States
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [status, setStatus] = useState("LOADING");
//   const [lastPunch, setLastPunch] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchStatus = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await employeeTimeLineStatus();
//       setStatus(response.data.status);
//       setLastPunch(response.data.lastPunch);
//     } catch (err) {
//       setError("Failed to fetch status.");
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handlePunch = async (eventType) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const clickTimestamp = new Date().toISOString();
//       console.log("22222222222222222", {
//         employeeId,
//         eventType,
//         timestamp: clickTimestamp,
//       });
//       const data = {
//         employeeId,
//         eventType,
//         timestamp: clickTimestamp,
//       };
//       await creeateEmployeeTimeLineApi(data);
//       await fetchStatus();
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.error || `Error performing action: ${eventType}`;
//       setError(errorMessage);
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timerId);
//   }, []);

//   useEffect(() => {
//     fetchStatus();
//   }, [employeeId]);

//   const timeAgo = lastPunch
//     ? calculateTimeAgo(lastPunch.timestamp)
//     : "No punches recorded today.";

//   const statusInfo = {
//     CLOCK_IN: { text: "CLOCKED IN", color: "bg-green-500" },
//     START_LUNCH: { text: "ON LUNCH", color: "bg-yellow-500" },
//     START_EXCEPTION: { text: "ON BREAK", color: "bg-orange-500" },
//     CLOCK_OUT: { text: "CLOCKED OUT", color: "bg-red-500" },
//     NOT_CLOCKED_IN: { text: "CLOCKED OUT", color: "bg-red-500" },
//     LOADING: { text: "LOADING...", color: "bg-gray-400" },
//   };
//   const currentStatusInfo = statusInfo[status] || {
//     text: "CLOCKED OUT",
//     color: "bg-red-500",
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//         <h1 className="text-lg sm:text-xl font-bold">Quick Punch</h1>
//         <span
//           className={`text-white text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap ${currentStatusInfo.color}`}
//         >
//           {currentStatusInfo.text}
//         </span>
//       </div>

//       <p className="text-orange-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center h-4">
//         {status !== "LOADING" && lastPunch && timeAgo}
//       </p>
//       {error && (
//         <p className="text-red-500 text-center text-xs mt-1">{error}</p>
//       )}

//       <div className="flex items-center justify-center my-3 sm:my-4 gap-2 sm:gap-4">
//         <img src={timer} alt="Timer" className="w-6 h-6 sm:w-8 sm:h-8" />
//         <span className="text-2xl sm:text-4xl font-bold tracking-wider">
//           {formatTime(currentTime)}
//         </span>
//       </div>

//       <div className="grid grid-cols-2 gap-3 sm:gap-4 text-white text-xs sm:text-sm">
//         <button
//           onClick={() => handlePunch("CLOCK_IN")}
//           disabled={
//             isLoading || (status !== "NOT_CLOCKED_IN" && status !== "CLOCK_OUT")
//           }
//           className="bg-[#00A76F] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Clock In
//         </button>
//         <button
//           onClick={() => handlePunch("CLOCK_OUT")}
//           disabled={
//             isLoading || status === "NOT_CLOCKED_IN" || status === "CLOCK_OUT"
//           }
//           className="bg-[#FF5630] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Clock Out
//         </button>

//         <button
//           onClick={() => handlePunch("START_LUNCH")}
//           disabled={isLoading || status !== "CLOCK_IN"}
//           className="bg-[#DC2800] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Start Lunch
//         </button>
//         <button
//           onClick={() => handlePunch("END_LUNCH")}
//           disabled={isLoading || status !== "START_LUNCH"}
//           className="bg-[#049061] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           End Lunch
//         </button>

//         <button
//           onClick={() => handlePunch("START_EXCEPTION")}
//           disabled={isLoading || status !== "CLOCK_IN"}
//           className="bg-[#AC2000] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Start Exception
//         </button>
//         <button
//           onClick={() => handlePunch("END_EXCEPTION")}
//           disabled={isLoading || status !== "START_EXCEPTION"}
//           className="bg-[#006D49] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           End Exception
//         </button>

//         <button
//           className="col-span-2 bg-[#243C75] hover:bg-black py-2 sm:py-3 rounded-full transition-colors"
//           onClick={() => navigate("/vaction-request")}
//         >
//           Vacation Request
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuickPunch;

// --- TYPE DEFINITIONS ---

// Define the shape of the props passed to the component
interface QuickPunchProps {
  employeeId: number | string; // Can be a number or a string (like a UUID)
}

// Define a strict set of possible statuses for type safety
type ClockStatus =
  | "LOADING"
  | "CLOCK_IN"
  | "START_LUNCH"
  | "START_EXCEPTION"
  | "CLOCK_OUT"
  | "NOT_CLOCKED_IN";

// Define the shape of the lastPunch object
interface LastPunch {
  timestamp: string; // Assuming timestamp is an ISO string
  eventType: string;
}

// Define the valid event types that can be sent to the API
type PunchEventType =
  | "CLOCK_IN"
  | "CLOCK_OUT"
  | "START_LUNCH"
  | "END_LUNCH"
  | "START_EXCEPTION"
  | "END_EXCEPTION";

// --- HELPER FUNCTIONS WITH TYPES ---

const formatTime = (date: Date): string => {
  // Your implementation is fine, but toLocaleTimeString already returns a string.
  // The .replace() part is a stylistic choice.
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const calculateTimeAgo = (timestamp: string): string => {
  if (!timestamp) return "";
  const lastPunchDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - lastPunchDate.getTime()) / 1000
  );

  if (diffInSeconds < 0) return "Last Punch is in the future.";

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);

  if (hours > 0)
    return `Last Punch was ${hours} hour${hours > 1 ? "s" : ""} ago.`;
  if (minutes > 0)
    return `Last Punch was ${minutes} minute${minutes > 1 ? "s" : ""} ago.`;

  return "Last Punch was just now.";
};

// --- COMPONENT DEFINITION ---

const QuickPunch: FC<QuickPunchProps> = ({ employeeId }) => {
  const navigate = useNavigate();

  // --- STATES WITH TYPES ---
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [status, setStatus] = useState<ClockStatus>("LOADING");
  const [lastPunch, setLastPunch] = useState<LastPunch | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await employeeTimeLineStatus();
      setStatus(response.data.status);
      setLastPunch(response.data.lastPunch);
    } catch (err: any) {
      setError("Failed to fetch current status.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePunch = async (eventType: PunchEventType): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const clickTimestamp = new Date().toISOString();
      const data = {
        employeeId,
        eventType,
        timestamp: clickTimestamp,
      };
      await creeateEmployeeTimeLineApi(data);
      // Refetch the status to update the UI
      await fetchStatus();
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error || `Error performing action: ${eventType}`;
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    // Ensure employeeId exists before fetching
    if (employeeId) {
      fetchStatus();
    }
  }, [employeeId]);

  const timeAgo = lastPunch
    ? calculateTimeAgo(lastPunch.timestamp)
    : "No punches recorded today.";

  // Type the statusInfo object for better autocompletion and error checking
  const statusInfo: Record<ClockStatus, { text: string; color: string }> = {
    CLOCK_IN: { text: "CLOCKED IN", color: "bg-green-500" },
    START_LUNCH: { text: "ON LUNCH", color: "bg-yellow-500" },
    START_EXCEPTION: { text: "ON BREAK", color: "bg-orange-500" },
    CLOCK_OUT: { text: "CLOCKED OUT", color: "bg-red-500" },
    NOT_CLOCKED_IN: { text: "CLOCKED OUT", color: "bg-red-500" },
    LOADING: { text: "LOADING...", color: "bg-gray-400" },
  };

  const currentStatusInfo = statusInfo[status] || {
    text: "CLOCKED OUT",
    color: "bg-red-500",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      {/* --- JSX remains largely the same, but benefits from typed logic --- */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl font-bold">Quick Punch</h1>
        <span
          className={`text-white text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap ${currentStatusInfo.color}`}
        >
          {currentStatusInfo.text}
        </span>
      </div>

      <p className="text-orange-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center h-4">
        {status !== "LOADING" && lastPunch && timeAgo}
      </p>
      {error && (
        <p className="text-red-500 text-center text-xs mt-1">{error}</p>
      )}

      <div className="flex items-center justify-center my-3 sm:my-4 gap-2 sm:gap-4">
        <img src={timer} alt="Timer" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-2xl sm:text-4xl font-bold tracking-wider">
          {formatTime(currentTime)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-white text-xs sm:text-sm">
        <button
          onClick={() => handlePunch("CLOCK_IN")}
          disabled={
            isLoading || (status !== "NOT_CLOCKED_IN" && status !== "CLOCK_OUT")
          }
          className="bg-[#00A76F] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Clock In
        </button>
        <button
          onClick={() => handlePunch("CLOCK_OUT")}
          disabled={
            isLoading || status === "NOT_CLOCKED_IN" || status === "CLOCK_OUT"
          }
          className="bg-[#FF5630] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Clock Out
        </button>

        <button
          onClick={() => handlePunch("START_LUNCH")}
          disabled={isLoading || status !== "CLOCK_IN"}
          className="bg-[#DC2800] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Start Lunch
        </button>
        <button
          onClick={() => handlePunch("END_LUNCH")}
          disabled={isLoading || status !== "START_LUNCH"}
          className="bg-[#049061] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          End Lunch
        </button>

        <button
          onClick={() => handlePunch("START_EXCEPTION")}
          disabled={isLoading || status !== "CLOCK_IN"}
          className="bg-[#AC2000] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Start Exception
        </button>
        <button
          onClick={() => handlePunch("END_EXCEPTION")}
          disabled={isLoading || status !== "START_EXCEPTION"}
          className="bg-[#006D49] hover:bg-black py-2 sm:py-3 rounded-full transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          End Exception
        </button>

        <button
          className="col-span-2 bg-[#243C75] hover:bg-black py-2 sm:py-3 rounded-full transition-colors"
          onClick={() => navigate("/vaction-request")}
        >
          Vacation Request
        </button>
      </div>
    </div>
  );
};

export default QuickPunch;
