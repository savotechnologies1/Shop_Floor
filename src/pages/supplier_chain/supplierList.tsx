import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteSupplier, supplierList } from "./https/suppliersApi";

const SupplierList = () => {
  // Handle Edit Click
  const handleEditClick = (id: any) => {
    navigate(`/edit-supplier/${id}`);
  };

  const [customerData, setCustomerData] = useState<CustomerItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [openOptionsIndex, setOpenOptionsIndex] = useState<number | null>(null);
  const toggleOptions = (index: number) => {
    setOpenOptionsIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const navigate = useNavigate();
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const fetchCustomerList = async (page = 1) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await supplierList(page, rowsPerPage);
      setCustomerData(response.data);
      setTotalPages(response.pagination?.totalPages || 1);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCustomerList(currentPage);
  }, [currentPage]);

  const handleDelete = (id: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      deleteSupplier(id).then();
      fetchCustomerList()
    } catch (error: unknown) {
      throw error;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-4"></div>
      <div>
        {" "}
        <h1 className="font-semibold text-[20px] md:text-[24px] text-black">
          Suppliers
        </h1>
      </div>
      <div className="flex justify-between  items-center">
        <div className="flex gap-2 items-center ">
          <p
            className={`text-[14px] text-black`}
            onClick={() => "dashboardDetailes"}
          >
            <NavLink to={"/dashboardDetailes"}>Dashboard</NavLink>
          </p>
          <span>
            <FaCircle className="text-[6px] text-gray-500" />
          </span>
          <span className="text-[14px] hover:cursor-pointer">Suppliers</span>
          <span>
            <FaCircle className="text-[6px] text-gray-500" />
          </span>
          <span className="text-[14px] hover:cursor-pointer"> List</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white  p-4 mt-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-end">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium">Search</label>
            <input
              type="text"
              placeholder="Enter Supplier Name"
              className="border w-full px-3 py-2 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium">Filter By</label>
            <select className="border w-full px-3 py-2 rounded-md">
              <option>New Supplier</option>
              <option>Production Manager</option>
            </select>
          </div>
          {/* <div className="flex items-center">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border w-full px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <img src={more} alt="" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white  overflow-x-auto ">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-100 text-sm whitespace-nowrap">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Address</th>
              <th className="text-left p-3">Billing Terms</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr className="border-b hover:bg-gray-50 text-sm">
                  <td className="p-3 whitespace-nowrap">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="p-3 whitespace-nowrap">{item.email}</td>
                  <td className="p-3">{item.address}</td>
                  <td className="p-3">{item.billingTerms}</td>

                  <td className="p-3 flex items-center gap-4">
                    {/* Edit Icon */}
                    <FiEdit2
                      onClick={() => handleEditClick(item.id)}
                      className="text-black  cursor-pointer text-lg"
                      title="Quick Edit"
                    />
                    {/* More Icon */}
                    <BsThreeDotsVertical
                      className="text-black hover:text-black cursor-pointer text-lg"
                      title="More Options"
                      onClick={() => toggleOptions(index)}
                    />

                    {openOptionsIndex === index && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                        <button
                          onClick={() => navigate(`/edit-supplier/${item.id}`)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 p-2">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-2 py-2 rounded-md ${
              currentPage === 1 ? "bg-gray-300" : "bg-brand text-white"
            }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? "bg-gray-300" : "bg-brand text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierList;
