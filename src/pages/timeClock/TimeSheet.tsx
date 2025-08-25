import { FC, useEffect, useState } from "react";
import { employeeAllTimeLine } from "./https/timeClock";

interface TimeSheetEntry {
  date: string;
  loginTime: string | null;
  lunchStart: string | null;
  lunchEnd: string | null;
  logout: string | null;
  exceptionStart: string | null;
  exceptionEnd: string | null;
  vacation: string;
}

interface PaginationInfo {
  page: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

// *** NEW ***: Define the shape of the entire API response payload for clarity
interface ApiResponse {
  data: TimeSheetEntry[];
  pagination: PaginationInfo;
  message?: string;
  totalCounts?: number;
}

// --- COMPONENT DEFINITION ---
const TimeSheet: FC = () => {
  // --- STATE HOOKS WITH EXPLICIT TYPES ---
  const [timeSheetData, setTimeSheetData] = useState<TimeSheetEntry[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // --- DATA FETCHING LOGIC ---
  const fetchTimeSheet = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await employeeAllTimeLine();
      const apiData: ApiResponse = response.data;
      setTimeSheetData(apiData.data);
      setPagination(apiData.pagination);
    } catch (err: any) {
      setError(
        err.message || "An unknown error occurred while fetching the timesheet."
      );
      console.error("Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimeSheet();
  }, [currentPage]);

  // --- EVENT HANDLERS (No changes needed) ---
  const handleNextPage = () => {
    if (pagination?.hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagination?.hasPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const tableHeaders = [
    "Date",
    "Login Time",
    "Lunch Start",
    "Lunch End",
    "Logout",
    "Exception Start",
    "Exception End",
    "Vacation",
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Time List</h1>
        <p className="text-sm text-gray-500 mt-1">
          Dashboard • timeO'clock • time Sheet
        </p>
      </div>

      {/* Main Content Card */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4 sm:p-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <label
              htmlFor="filter"
              className="text-sm font-medium text-gray-700"
            >
              Filter
            </label>
            <select
              id="filter"
              className="mt-1 block w-full sm:w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="This Week"
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {/* If you add an icon, you can use Heroicons or another library here */}
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td
                    colSpan={tableHeaders.length}
                    className="text-center py-4"
                  >
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={tableHeaders.length}
                    className="text-center py-4 text-red-500"
                  >
                    {error}
                  </td>
                </tr>
              ) : timeSheetData.length > 0 ? (
                timeSheetData.map((entry) => (
                  <tr key={entry.date}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.loginTime || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.lunchStart || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.lunchEnd || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.logout || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.exceptionStart || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.exceptionEnd || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.vacation}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableHeaders.length}
                    className="text-center py-4 text-gray-500"
                  >
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination and Actions */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePreviousPage}
              disabled={!pagination?.hasPrevious || isLoading}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {pagination?.page || 1} of {pagination?.totalPages || 1}
            </span>
            <button
              onClick={handleNextPage}
              disabled={!pagination?.hasNext || isLoading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
              Approve
            </button>
            <button className="px-6 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
              Send to Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;
