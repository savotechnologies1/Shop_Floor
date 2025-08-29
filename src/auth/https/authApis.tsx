import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { AxiosError } from "axios";

export const signUpApi = async (userData: object) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    console.log("responseresponse22", response.data.message);
    console.log("responseresponse22", response.status);
    if (response.status === 201) {
      console.log("dfklsdfjsdfjkl");
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

export const loginApi = async (userData: object) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    console.log("299999999999999999980");

    console.log("responseresponse", response);

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

export const forgetPassword = async (data: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstance.post("/forget-password", data);
    localStorage.setItem("email", response.data.email);
    if (response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const otpVarify = async (data: object) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstance.post("/validate-otp", data);
    if (response.status === 200) {
      localStorage.removeItem("email");
      localStorage.setItem("token", response.data.resetToken);
      toast.success(response.data.message);
    }

    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resetPassword = async (data: object) => {
  const token = localStorage.getItem("token");
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstance.post("/reset-password", {
      ...data,
      token: token,
    });

    if (response.status === 200) {
      localStorage.removeItem("email");
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
    }

    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
