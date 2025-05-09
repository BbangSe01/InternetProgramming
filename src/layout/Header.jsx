import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heart from "../assets/images/Heart.svg";
import searchIcon from "../assets/images/searchIcon.svg";
const Header = () => {
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
        <Login>로그인</Login>
        <Favorites>
          <img src={Heart} alt="즐겨찾기" />
        </Favorites>
      </Category>
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
