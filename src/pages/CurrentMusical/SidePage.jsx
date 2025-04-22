import React from "react";
import styled from "styled-components";
import SidebarImg from "../../assets/images/sideMusical.svg";
import { useNavigate } from "react-router-dom";
const SidePage = () => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/DetailPage");
  };

  return (
    <SideArea onClick={() => goToDetail()}>
      <SideImg src={SidebarImg} alt="사이드바 이미지" />
      <Explaination>
        <SideCate>뮤지컬</SideCate>
        <SideTitle>라이카</SideTitle>
        <SideDate>2025.03.18 ~ 2025.05.18</SideDate>
        <SideLocation>연강홀</SideLocation>
      </Explaination>
    </SideArea>
  );
};

export default SidePage;

const SideArea = styled.div`
  width: 27%;
  position: fixed; // 💥 화면에 고정
  min-height: 100%;
  top: 70px;
  left: 0;
  box-shadow: 5px 5px 18px gray;
  cursor: pointer;
`;

const SideImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Explaination = styled.div`
  font-family: "Nanum1";
  margin-left: 40px;
`;

const SideCate = styled.p`
  margin-bottom: 18px;
  font-size: 12px;
`;

const SideTitle = styled.p`
  font-size: 24px;
  margin-bottom: 27px;
`;

const SideDate = styled.p`
  font-size: 11px;
  margin-bottom: 13px;
  color: #8d8d8d;
`;

const SideLocation = styled.p`
  font-size: 11px;
  color: #8d8d8d;
`;
