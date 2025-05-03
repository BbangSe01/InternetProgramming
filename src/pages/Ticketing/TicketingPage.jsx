import React, { useState, useEffect } from "react";
import axiosInstance from "../../apis/axiosInstance";
const TicketingPage = () => {
  // 구글 로그인 시험
  // const [data, setData] = useState([]);
  // const getLogin = async () => {
  //   try {
  //     const response = await axiosInstance.get(`/google/login`);
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     console.error("데이터 에러:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchLogin = async () => {
  //     const result = await getLogin();
  //     setData(result);
  //   };
  //   fetchLogin();
  // }, []);

  // console.log(data);
  return <div>티켓팅페이지</div>;
};

export default TicketingPage;
