import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// 더보기 페이지 카드와 동일한 UI로 진행하기 위함
import MoreCard from "../CurrentMusical/Blocks/Slice/MoreCard";
import { useLocation } from "react-router";
const FavoritesPage = () => {
  // 즐겨찾기 전체 데이터 받아오기
  const Favorites = useSelector((state) => state.favorites.items);
  const location = useLocation();
  console.log(Favorites);
  return (
    <Screen key={location.key}>
      <Title>즐겨찾기</Title>
      <FavoritesArea>
        {Favorites.map((data) => {
          return <MoreCard data={data} />;
        })}
      </FavoritesArea>
    </Screen>
  );
};

export default FavoritesPage;

const Screen = styled.div`
  width: 100%;
  font-family: "Nanum1";
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 100px;
`;

const FavoritesArea = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`;
