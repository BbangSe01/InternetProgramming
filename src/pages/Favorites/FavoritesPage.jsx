import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MoreCard from "../CurrentMusical/Blocks/Slice/MoreCard";
import { useLocation } from "react-router";

const FavoritesPage = () => {
  const Favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 상단으로 이동
  }, []);

  return (
    <Screen>
      <Title>즐겨찾기</Title>
      <FavoritesArea>
        {Favorites.map((data) => (
          <MoreCard key={data.performId} data={data} />
        ))}
      </FavoritesArea>
    </Screen>
  );
};

export default FavoritesPage;

const Screen = styled.div`
  width: 100%;
  font-family: "Nanum1";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 100px;
  margin-bottom: 87px;
`;

const FavoritesArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1490px;
  flex-wrap: wrap;
  // background-color: green;
`;
