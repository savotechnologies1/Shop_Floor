import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

export const employeeTimeLineDetail = async () => {
  try {
    const response = await axiosInstance.get(`/employee-time-line-detail`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const creeateEmployeeTimeLineApi = async (data: object) => {
  try {
    console.log("datadata", data);

    const response = await axiosInstance.post(`/create-timeline`, data);
    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

export const employeeTimeLineStatus = async () => {
  try {
    const response = await axiosInstance.get(`/employee-timeline-status`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const employeeTimeLine = async () => {
  try {
    const response = await axiosInstance.get(`/employee-timeline`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const employeeAllTimeLine = async (
  page = 1,
  limit = 5,
  filter: string,
  searchVal: string
) => {
  try {
    const response = await axiosInstance.get(
      `/all-employee-timeline?page=${page}&limit=${limit}&filter=${filter}&search=${searchVal}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const applyVacationReq = async (data: object) => {
  try {
    console.log("datadata", data);

    const response = await axiosInstance.post(`/apply-vacation-request`, data);
    if (response.status === 201) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
