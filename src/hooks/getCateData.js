import axiosInstance from "../apis/axiosInstance";
const getCateData = async ({ kind, category, page }) => {
  try {
    const response = await axiosInstance.get(
      `${kind}/performances?${kind}=${category}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("데이터 에러:", error);
  }
};

export default getCateData;
