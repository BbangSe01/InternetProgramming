import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosInstance";
import LoadingSpinner from "../../assets/images/loading.gif";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getCodeFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("code");
    };

    const loginWithCode = async () => {
      const code = getCodeFromUrl();
      if (!code) {
        alert("로그인 코드가 존재하지 않습니다.");
        navigate("/"); // 코드가 없다면 메인 페이지로 리디렉션
        return;
      }

      try {
        const res = await axiosInstance.post(
          "/google/callback",
          { code },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const token = res?.data?.token;
        if (!token) throw new Error("토큰이 존재하지 않음");

        localStorage.setItem("accessToken", token);
        window.location.href = "/";
      } catch (error) {
        console.error("❌ 로그인 처리 실패:", error);
        alert("로그인 처리에 실패했습니다. 다시 시도해주세요.");
        alert({ code });
        navigate("/");
      }
    };

    loginWithCode();
  }, [navigate]);

  return (
    <Screen>
      <img src={LoadingSpinner} alt="로그인 작업 진행중" />
    </Screen>
  );
};

export default LoginPage;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
