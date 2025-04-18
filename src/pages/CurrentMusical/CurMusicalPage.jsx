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
        <SliceArea dataType={genreClick ? "genre" : "loc"} />
      </ContentsArea>
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

const ContentsArea = styled.div`
  margin-left: 27%;
  width: 100%;
  height: 3000px;
  display: flex;
  flex-direction: column;
`;
