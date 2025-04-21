import React from "react";
import styled from "styled-components";
import onGenreImg from "../../../assets/images/onGenre.svg";
import offGenreImg from "../../../assets/images/offGenre.svg";
import onLocImg from "../../../assets/images/onLoc.svg";
import offLocImg from "../../../assets/images/offLoc.svg";

const CategoryButton = ({ genreClick, locClick, onClickLoc, onClickGenre }) => {
  return (
    <ButtonArea>
      <GenreButton onClick={() => onClickGenre()}>
        <Gimg src={genreClick ? onGenreImg : offGenreImg} alt="장르별 버튼" />
        <Gtext $active={genreClick}>장르별</Gtext>
      </GenreButton>
      <LocButton onClick={() => onClickLoc()}>
        <Locimg src={locClick ? onLocImg : offLocImg} alt="지역별 버튼" />
        <Loctext $active={locClick}>지역별</Loctext>
      </LocButton>
    </ButtonArea>
  );
};

export default CategoryButton;

const ButtonArea = styled.div`
  display: flex;
  margin-left: 76px;
  margin-top: 40px;
`;

const GenreButton = styled.div`
  width: 35px;
  height: 51px;
  margin-right: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Gimg = styled.img`
  width: 35px;
  height: 35px;
`;
const Gtext = styled.p`
  margin-top: 0px;
  font-size: 9px;
  color: ${({ $active }) => ($active ? "black" : "#8d8d8d")};
`;
const LocButton = styled.div`
  width: 35px;
  height: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Locimg = styled.img`
  width: 35px;
  height: 35px;
`;
const Loctext = styled.p`
  font-size: 9px;
  margin-top: 0px;
  color: ${({ $active }) => ($active ? "black" : "#8d8d8d")};
`;
