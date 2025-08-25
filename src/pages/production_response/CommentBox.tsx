// import React, { useState } from "react";
// import { sendStationNotification } from "./https/productionResponseApi";

// export default function CommentBox({ employeeInfo }) {
//   console.log(employeeInfo);

//   const [comment, setComment] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSend = async () => {
//     if (!comment && !image) {
//       alert("Please enter a comment or choose an image.");
//       return;
//     }
//     console.log("comment", comment, image);

//     const formData = new FormData();
//     formData.append("comment", comment);
//     formData.append("employeeId", employeeInfo.id);
//     if (image) {
//       formData.append("PartEnquiryImg", image);
//     }

//     try {
//       const res = await sendStationNotification(formData);
//       setComment("");
//       setImage(null);
//       setPreview(null);
//     } catch (error) {
//       console.error("Error uploading:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
//       <input
//         type="text"
//         placeholder="Write your comments"
//         className="border border-gray-400 py-2 px-4 rounded-md w-full placeholder-gray-400 bg-transparent text-sm md:text-base"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//       />

//       <div className="flex gap-3 w-full md:w-auto items-center">
//         {/* Image Upload Button */}
//         <label className="bg-brand text-white px-4 md:px-8 py-2 rounded-sm text-sm md:text-base font-semibold cursor-pointer">
//           Add Picture
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageChange}
//           />
//         </label>

//         {/* Send Button */}
//         <button
//           className="bg-brand text-white px-4 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>

//       {/* Image Preview */}
//       {preview && (
//         <div className="mt-3 md:mt-0">
//           <img
//             src={preview}
//             alt="Preview"
//             className="w-20 h-20 object-cover rounded-md border"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, FC, useEffect } from "react";

// --- MOCK API FUNCTION FOR DEMONSTRATION ---
// Replace this with your actual API import. It's typed for this example.
const sendStationNotification = async (
  formData: FormData
): Promise<{ success: boolean }> => {
  console.log("Sending notification with data:");
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  console.log("Upload successful!");
  return Promise.resolve({ success: true });
};
// --- END MOCK API FUNCTION ---

// 1. Define an interface for the shape of the employeeInfo prop
interface EmployeeInfo {
  id: string | number;
  // you can add other properties like name: string;
}

// 2. Define the props for the component itself
interface CommentBoxProps {
  employeeInfo: EmployeeInfo;
}

// 3. Type the component as a Functional Component (FC) and destructure its props
const CommentBox: FC<CommentBoxProps> = ({ employeeInfo }) => {
  // 4. Use generics (<>) to strongly type your state variables
  const [comment, setComment] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 5. Type the event object 'e' for the input change handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining for safety
    if (file) {
      setImage(file);
      // Best practice: Revoke old preview URL to prevent memory leaks
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSend = async () => {
    if (!comment && !image) {
      alert("Please enter a comment or choose an image.");
      return;
    }

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("employeeId", String(employeeInfo.id)); // Convert ID to string for FormData
    if (image) {
      formData.append("PartEnquiryImg", image);
    }

    try {
      // The 'res' variable is now typed based on the return type of the API call
      await sendStationNotification(formData);

      // Reset form state after successful submission
      setComment("");
      setImage(null);
      if (preview) {
        URL.revokeObjectURL(preview); // Clean up the preview URL
        setPreview(null);
      }
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Failed to send notification.");
    }
  };

  // Best practice: Clean up the object URL when the component unmounts
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 mb-6 p-4 border rounded-lg">
      <input
        type="text"
        placeholder="Write your comments"
        className="border border-gray-400 py-2 px-4 rounded-md w-full placeholder-gray-400 bg-transparent text-sm md:text-base"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex gap-3 w-full md:w-auto items-center">
        <label className="bg-blue-600 text-white px-4 md:px-8 py-2 rounded-sm text-sm md:text-base font-semibold cursor-pointer whitespace-nowrap">
          Add Picture
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto"
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      {preview && (
        <div className="mt-3 md:mt-0">
          <img
            src={preview}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-md border"
          />
        </div>
      )}
    </div>
  );
};

export default CommentBox;
