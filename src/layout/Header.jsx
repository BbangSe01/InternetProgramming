import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import Heart from "../assets/images/Heart.svg";
import searchIcon from "../assets/images/searchIcon.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLogIn(!!token);
  }, []);

  const handleLoginOut = async () => {
    if (isLogin) {
      localStorage.removeItem("accessToken");
      setIsLogIn(false);
      alert("로그아웃 되었습니다.");
      window.location.href = "/";
    } else {
      try {
        const response = await axiosInstance.get(`/google/login`);
        const loginUrl = response.data.url;
        window.location.href = loginUrl; // 구글 로그인 페이지로 이동
      } catch (error) {
        console.error("❌ 로그인 URL 요청 실패:", error);
        alert("로그인 요청에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <HeaderArea>
      <Title>MUDAE for</Title>
      <Category>
        <Performances>
          <Link to="/">공연 둘러보기</Link>
        </Performances>
        <Sites>
          <Link to="/TicketingPage">예매 사이트</Link>
        </Sites>
        <Login onClick={handleLoginOut}>
          {isLogin ? "로그아웃" : "로그인"}
        </Login>
        {isLogin ? (
          <Favorites>
            <img src={Heart} alt="즐겨찾기" />
          </Favorites>
        ) : null}
      </Category>
      {/**추후 검색 기능이 추가될 수 있어 남겨놨습니다.*/}
      {/* <SearchArea>
        <SearchBar />
        <SearchIcon src={searchIcon} alt="돋보기 이미지" />
      </SearchArea> */}
    </HeaderArea>
  );
};

export default Header;

const HeaderArea = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: white;
`;

const Title = styled.p`
  margin-left: 3%;
  font-family: "Nanum1";
  font-size: 20px;
`;

const Category = styled.div`
  display: flex;
  font-size: 15px;
  font-family: "Nanum1";
  margin-right: 35px;
`;

const Performances = styled.div`
  width: 117px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid black;
  cursor: pointer;
  a {
    color: black; // 글씨색 변경
    text-decoration: none; // 밑줄 제거
  }
`;

const Sites = styled.div`
  width: 101px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid black;
  cursor: pointer;
  a {
    color: black; // 글씨색 변경
    text-decoration: none; // 밑줄 제거
  }
`;

const Login = styled.div`
  cursor: pointer;
  padding-left: 14px;
  padding-right: 14px;
`;
const Favorites = styled.div`
  width: 47px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid black;
  cursor: pointer;
`;

const SearchArea = styled.div`
  margin-right: 3%;
  display: flex;
  position: relative;
`;

const SearchBar = styled.input`
  width: 360px;
  height: 39px;
  border-radius: 20px;
  // margin-right: 5%;
  border: 1px solid rgba(216, 216, 216, 1);
  font-family: "Nanum1";
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 35px;
`;
