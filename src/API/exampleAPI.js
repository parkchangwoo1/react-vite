import { request } from "src/utils/axios";

// API example
export const getExampleData = async (data) => {
  const res = await request("GET", url, data);
  if (res.success) return res.data;
};
