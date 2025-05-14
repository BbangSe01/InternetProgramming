import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MoreCard from "../CurrentMusical/Blocks/Slice/MoreCard";
import { useLocation } from "react-router";

const FavoritesPage = () => {
  const Favorites = useSelector((state) => state.favorites.items);
  const location = useLocation();

  return (
    <Screen key={location.key}>
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
