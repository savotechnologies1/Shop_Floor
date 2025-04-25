import data from "../../components/Data/orderStatusData";
import client_icon from "../../assets/client.png";
import date_icon from "../../assets/date.png";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const OrderStatus = () => {
  return (
    <div className=" py-6 bg-white rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          {" "}
          <h1 className="text-xl font-semibold px-4  ">Orders Status</h1>
        </div>
        <div className="flex sm:flex-row  gap-2 items-center px-4">
          <div className="border p-2 rounded-md border-black flex items-center gap-2">
          <FaCalendar />
          <select className="outline-none">
              <option value="">Jan 2024</option>
              <option value="">feb 2025</option>
            </select>
          </div>
          <div>
            <button className="bg-brand text-white p-2 rounded-md">
              Create Order
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto py-6">
        <table className="w-full  bg-white">
          <thead>
            <tr className="border-b whitespace-nowrap">
              <th className="px-4 py-3 text-left font-medium">
                <div className="flex gap-4 items-center">
                  <p>
                    <input type="checkbox" />
                  </p>
                  <p> Order</p>
                </div>
              </th>

              <th className="px-4 py-3 text-left font-medium">
                <div className="flex gap-4 items-center">
                  <p>
                    <img className="" src={client_icon} alt="" />
                  </p>
                  <p> Client</p>
                </div>
              </th>

              <th className="px-4 py-3 text-left font-medium">
                <div className="flex gap-4 items-center">
                  <p>
                    <img src={date_icon} alt="" />
                  </p>
                  <p> Date</p>
                </div>
              </th>

              <th className="px-4 py-3 text-left font-medium">
                <div className="flex gap-4 items-center">
                  <p></p>
                  <p>Status </p>
                </div>
              </th>
              <th className="px-4 py-3 text-left font-medium">
                <div className="flex gap-4 items-center">
                  <p></p>
                  <p>Country </p>
                </div>
              </th>
              <th className="px-4 py-3 text-left font-medium">
                <p> Total</p>
              </th>
              <th className="px-4 py-3 text-left font-medium">
                <p> </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className=" ">
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className=" mr-4">
                      <input type="checkbox" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font- ">
                        {item.orderId}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm sm:text-base whitespace-nowrap  ">
                  <p className="font-medium font-sm"> {item.name}</p>
                  <p className="font-xs text-gray-500">{item.email}</p>
                </td>
                <td className="px-4 py-4 text-sm sm:text-base  ">
                  {item.date}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded-md 
      ${item.status === "Pending" ? "bg-yellow-100 text-[#FDB52A]" : ""}
      ${item.status === "delivered" ? "bg-[#05C16833] text-[#14CA74]" : ""}
      ${item.status === "canceled" ? "bg-[#FF5A6533] text-[#FF5A65]" : ""}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm sm:text-base  ">
                  {item.country}
                </td>
                <td className="px-4 py-4 text-sm sm:text-base  ">
                  {item.total}
                </td>

                <td className="px-4 py-4 text-sm sm:text-base  ">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <GoPencil size={16} />
                    <AiOutlineDelete size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderStatus;
