import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  scrapEntryDetail,
  selectPartNamber,
  updateScrapEntry,
} from "./https/productionResponseApi";
import { selectSupplier } from "../supplier_chain/https/suppliersApi";
import { FaArrowLeft } from "react-icons/fa";
const EditPartScrapEntry = () => {
  const [partData, setPartData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [supplierData, setSupplierData] = useState([]);
  const [supplierSuggestions, setSupplierSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchPart: "",
      partId: "",
      supplier: "",
      supplierId: "",
      returnQuantity: "",
      scrapStatus: "yes",
      type: "part",
      defectDesc: "", // ✅ Added this field
    },
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const payload = {
          ...values,
          type: "part",
          returnQuantity: parseInt(values.returnQuantity, 10) || 0,
          // scrapStatus ko wapas boolean me convert karna ho sakta hai backend ke liye
          scrapStatus: values.scrapStatus === "yes" ? true : false,
        };

        const response = await updateScrapEntry(id, payload);
        if (response.status === 200) {
          navigate("/scrap-entries");
        }
      } catch (error) {
        console.error("Error updating scrap entry:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const [partsRes, suppliersRes, entryRes] = await Promise.all([
          selectPartNamber(),
          selectSupplier(),
          scrapEntryDetail(id),
        ]);

        const allParts = partsRes?.data || [];
        const allSuppliers = suppliersRes || [];
        setPartData(allParts);
        setSupplierData(allSuppliers);

        const entryData = entryRes.data.data;

        let supplierName = "";

        const foundSupplier = allSuppliers.find(
          (s) => s.id === entryData.supplierId,
        );

        if (foundSupplier) {
          supplierName = `${foundSupplier.name} `;
        } else if (entryData.supplier) {
          supplierName = `${entryData.supplier.name} `;
        }

        formik.setValues({
          searchPart: entryData.PartNumber?.partNumber || "",
          partId: entryData.partId || "",
          supplier: supplierName.trim(),
          supplierId: entryData.supplierId || "",
          returnQuantity: entryData.returnQuantity?.toString() || "",
          scrapStatus: entryData.scrapStatus === true ? "yes" : "no",
          type: entryData.type || "part",
          defectDesc: entryData.defectDesc || "",
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchInitialData();
  }, [id]);
  useEffect(() => {
    if (formik.values.supplier && !formik.values.supplierId) {
      const filtered = supplierData.filter((s) => {
        const fullName = `${s.firstName} ${s.lastName}`.toLowerCase();
        console.log("fullName", fullName);
        return fullName.includes(formik.values.supplier.toLowerCase());
      });
      setSupplierSuggestions(filtered);
    } else if (!formik.values.supplier) {
      setSupplierSuggestions([]);
    }
  }, [formik.values.supplier, formik.values.supplierId, supplierData]);
  // Suggestion Click Handlers
  const handleSuggestionClick = (part) => {
    formik.setFieldValue("searchPart", part.partNumber);
    formik.setFieldValue("partId", part.id || part.part_id);
    setSuggestions([]);
  };
  const handleSupplierClick = (s) => {
    console.log("ssss", s);
    formik.setFieldValue("supplier", `${s.firstName} ${s.lastName}`);
    formik.setFieldValue("supplierId", s.id);
    setSupplierSuggestions([]);
  };
  const handleReset = () => {
    formik.resetForm();
    setSuggestions([]);
    setSupplierSuggestions([]);
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center font-semibold">Loading details...</div>
    );
  }
  console.log("supplierSuggestions", supplierSuggestions);
  return (
    <div className="py-4 px-5">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition font-medium"
        title="Go Back"
      >
        <FaArrowLeft />
        Back
      </button>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <h1 className="font-semibold text-[20px] md:text-[24px] text-black mb-4">
          Edit Part Scrap Entry
        </h1>

        {/* Part Search Input */}
        <div className="bg-white p-4 relative border rounded-md">
          <label className="block font-semibold mb-1">Search Part</label>
          <input
            type="text"
            placeholder="Search part ....."
            className="border py-3 px-4 rounded-md w-full text-gray-600 placeholder-black"
            value={formik.values.searchPart}
            onChange={(e) => {
              formik.setFieldValue("searchPart", e.target.value);
              formik.setFieldValue("partId", "");
            }}
            onFocus={() =>
              !formik.values.searchPart && setSuggestions(partData)
            }
            onBlur={() => setTimeout(() => setSuggestions([]), 150)}
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-50 left-4 right-4 bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
              {suggestions.map((part) => (
                <li
                  key={part.id || part.part_id}
                  className="p-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                  onClick={() => handleSuggestionClick(part)}
                >
                  {part.partNumber}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Supplier Input */}
        <div className="bg-white p-4 relative mt-4 border rounded-md">
          <label className="block font-semibold mb-1">Supplier</label>
          <input
            type="text"
            placeholder="Search Supplier"
            className="border py-3 px-4 rounded-md w-full text-gray-600"
            value={formik.values.supplier}
            onChange={(e) => {
              formik.setFieldValue("supplier", e.target.value);
              formik.setFieldValue("supplierId", "");
            }}
            onFocus={() => setSupplierSuggestions(supplierData)}
            onBlur={() => setTimeout(() => setSupplierSuggestions([]), 150)}
          />
          {supplierSuggestions.length > 0 && (
            <ul className="absolute z-50 left-4 right-4 bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
              {supplierSuggestions.map((s) => (
                <li
                  key={s.id}
                  className="p-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                  onClick={() => handleSupplierClick(s)}
                >
                  {/* ✅ combined name dikhayein */}
                  {s.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Return Quantity & Scrap Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 mt-4 border rounded-md">
          <div>
            <label className="block font-semibold mb-1">Return Quantity</label>
            <input
              type="number"
              placeholder="Enter Return Quantity"
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              {...formik.getFieldProps("returnQuantity")}
              min="0"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Scrap Status</label>
            <select
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              {...formik.getFieldProps("scrapStatus")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* Defect Description (Naya Field) */}
        <div className="bg-white p-4 mt-4 border rounded-md">
          <label className="block font-semibold mb-1">Defect Description</label>
          <textarea
            rows={3}
            placeholder="Describe the defect or reason for scrap..."
            className="border py-3 px-4 rounded-md w-full text-gray-600 focus:outline-blue-500"
            {...formik.getFieldProps("defectDesc")}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between bg-white p-6 mt-4 border rounded-md">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white text-md hover:bg-blue-800 transition rounded-md"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Updating..." : "Update Scrap Entry"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/scrap-entries")}
            className="ml-4 px-6 py-2 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPartScrapEntry;
