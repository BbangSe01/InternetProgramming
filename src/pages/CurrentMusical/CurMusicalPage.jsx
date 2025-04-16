import React from "react";
import styled from "styled-components";
import SidePage from "./SidePage";
const CurMusicalPage = () => {
  return (
    <Screen>
      <SidePage />
      <ExDiv>gdgd</ExDiv>
    </Screen>
  );
};

export default CurMusicalPage;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  // 좌우 스크롤 방지
  max-width: 100%;
`;

const ExDiv = styled.div`
  margin-left: 28%;
  width: 200px;
  height: 3000px;
`;
