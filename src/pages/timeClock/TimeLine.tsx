// import { useEffect, useState } from "react";
// import { employeeTimeLine } from "./https/timeClock";

// const Timeline = () => {
//   const events = [
//     {
//       label: "Start Exception",
//       date: "15 May 2020 9:30 am",
//       color: "bg-green-500",
//     },
//     { label: "End Lunch", date: "15 May 2020 9:30 am", color: "bg-yellow-500" },
//     { label: "Start Lunch", date: "15 May 2020 8:00 am", color: "bg-blue-500" },
//     {
//       label: "Clock In Punch",
//       date: "15 May 2020 8:30 am",
//       color: "bg-red-500",
//     },
//     {
//       label: "Login Successfully",
//       date: "15 May 2020 9:00 am",
//       color: "bg-purple-500",
//     },
//   ];
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
//       const response = await employeeTimeLine();
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
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Timeline</h2>

//       <div className="relative  pl-6">
//         {events.map((event, index) => (
//           <div key={index} className="mb-4 relative ">
//             {/* Dot */}
//             <div
//               className={`absolute -left-4 top-2 w-3 h-3   ${event.color} rounded-full`}
//             ></div>
//             <div
//               className={`absolute -left-3 top-4 w-8 h-8   border-b-2 mt-2 rotate-90`}
//             ></div>

//             <div className="">
//               <p className="text-[#1C252E] font-semibold ">{event.label}</p>
//               <p className="text-gray-500 text-sm">{event.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import { FC, useEffect, useState } from "react";
import { employeeTimeLine } from "./https/timeClock"; // मान रहे हैं कि यह आपकी API कॉल है

// Define the specific event types for better type safety and autocompletion.
type EventType =
  | "CLOCK_IN"
  | "CLOCK_OUT"
  | "START_LUNCH"
  | "END_LUNCH"
  | "START_EXCEPTION"
  | "END_EXCEPTION"
  | "LOGIN";

// Define the shape of a single timeline event object from the API.
interface TimelineEvent {
  eventType: EventType;
  timestamp: string; // ISO date string
  // Add other properties from your API if they exist, e.g., id: string;
}

// Define the shape of the details for each event type.
interface EventDetails {
  label: string;
  color: string;
}

// --- HELPER OBJECT & FUNCTIONS WITH TYPES ---

// Use `Record` to create a strongly-typed map.
// This ensures that every key is one of the defined EventTypes.
const eventDetailsMap: Record<EventType, EventDetails> = {
  CLOCK_IN: { label: "Clock In Punch", color: "bg-red-500" },
  CLOCK_OUT: { label: "Clock Out Punch", color: "bg-gray-500" },
  START_LUNCH: { label: "Start Lunch", color: "bg-blue-500" },
  END_LUNCH: { label: "End Lunch", color: "bg-yellow-500" },
  START_EXCEPTION: { label: "Start Exception", color: "bg-green-500" },
  END_EXCEPTION: { label: "End Exception", color: "bg-indigo-500" },
  LOGIN: { label: "Login Successfully", color: "bg-purple-500" },
};

// Type the function parameter and return value.
const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(",", "");
};

// --- COMPONENT DEFINITION ---

const Timeline: FC = () => {
  // --- STATE HOOKS WITH TYPES ---
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimelineData = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await employeeTimeLine();
        // Check if the data exists and is an array before setting state
        if (response.data && Array.isArray(response.data.data)) {
          // The API data is cast to our defined type for safety.
          const events = response.data.data as TimelineEvent[];
          // .reverse() mutates the array, so it's safer to create a copy first.
          setTimelineEvents([...events].reverse());
        } else {
          setTimelineEvents([]); // Handle cases with no data gracefully
        }
      } catch (err: any) {
        // Type the caught error
        const errorMessage =
          err.response?.data?.message || "Failed to fetch timeline.";
        setError(errorMessage);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimelineData();
  }, []); // Empty dependency array means this runs once on mount

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Timeline</h2>
        <p>Loading timeline...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Timeline</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Timeline</h2>

      {timelineEvents.length > 0 ? (
        <div className="relative border-l-2 border-gray-200 ml-1.5">
          {timelineEvents.map((event, index) => {
            // TypeScript knows `event.eventType` is of type `EventType`,
            // so this lookup is now 100% type-safe.
            const details = eventDetailsMap[event.eventType] || {
              label: event.eventType.replace("_", " "), // Fallback for safety
              color: "bg-gray-400",
            };

            return (
              <div key={index} className="mb-8 ml-6 relative">
                <span
                  className={`absolute -left-[31px] flex items-center justify-center w-5 h-5 ${details.color} rounded-full ring-4 ring-white`}
                ></span>
                <div>
                  <p className="text-[#1C252E] font-semibold">
                    {details.label}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {formatDateTime(event.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No timeline events recorded for today.</p>
      )}
    </div>
  );
};

export default Timeline;
