import React from "react";
import styled from "styled-components";
import SidePage from "./SidePage";
import { useState } from "react";
import CategoryButton from "./Blocks/CategoryButton";
import SliceArea from "./Blocks/SliceArea";
const CurMusicalPage = () => {
  const [genreClick, setGenreClick] = useState(true);
  const [locClick, setLocClick] = useState(false);

  const onClickLoc = () => {
    setGenreClick(false);
    setLocClick(true);
  };

  const onClickGenre = () => {
    setGenreClick(true);
    setLocClick(false);
  };

  return (
    <Screen>
      <SidePage />
      <ContentsArea>
        <CategoryButton
          genreClick={genreClick}
          locClick={locClick}
          onClickLoc={onClickLoc}
          onClickGenre={onClickGenre}
        />
        <SliceArea dataType={genreClick ? "genre" : "area"} />
      </ContentsArea>
    </Screen>
  );
};

export default CurMusicalPage;

const Screen = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden; // 스크롤 방지
`;

const ContentsArea = styled.div`
  margin-left: 27%;
  width: 73%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; // 내부 요소가 튀어나가는 것 방지
`;
