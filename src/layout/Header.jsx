import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/images/searchIcon.svg";
const Header = () => {
  return (
    <HeaderArea>
      <Title>MUDAE for</Title>
      <Category>
        <EachCate>상영 예정작</EachCate>
        <EachCate>공연 일정</EachCate>
      </Category>
      <SearchArea>
        <SearchBar />
        <SearchIcon src={searchIcon} alt="돋보기 이미지" />
      </SearchArea>
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
  margin-left: 300px;
  font-family: "Nanum1";
`;

const EachCate = styled.div`
  margin-right: 70px;
  font-size: 16px;
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
