import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { AxiosError } from "axios";


export const signUpApi = async (userData: object) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    console.log('responseresponse22',response.data.message)
    console.log('responseresponse22',response.status)
    if (response.status === 201) {
        console.log("dfklsdfjsdfjkl")
      toast.success(response.data.message);
    }
    return response;
  }catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};

export const loginApi = async (userData: object) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response?.data?.message) {
      toast.error(axiosError.response.data.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};

// export const forgetPassword = async (data: string) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await axiosInstance.post("/forget-password", data);
//     localStorage.setItem("email", response.data.email);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const otpVarify = async (data: object) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await axiosInstance.post("/validate-otp", data);
//     localStorage.removeItem("email");
//     localStorage.setItem("token", response.data.token);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const resetPassword = async (data: object) => {
//   const token = localStorage.getItem("token");
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await axiosInstance.post("/reset-password", {
//       ...data,
//       token: token,
//     });

//     localStorage.removeItem("email");
//     localStorage.setItem("token", response.data.token);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
