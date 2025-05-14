import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosInstance from "../../apis/axiosInstance";
import redHeart from "../../assets/images/redHeart.svg";
import whiteHeart from "../../assets/images/whiteHeart.svg";
import LeftDetail from "./LeftDetail";
import RightDetail from "./RightDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites, postFavorites } from "../../stores/favoritesSlice";
const DetailPage = () => {
  // url에서 performId 추출
  const { id: performId } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [isLogIn, setIsLogIn] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.favorites.ids);

  useEffect(() => {
    setIsLogIn(!!localStorage.getItem("accessToken"));
  }, []);

  useEffect(() => {
    if (Array.isArray(ids) && ids.includes(performId)) {
      setIsFavorites(true);
    } else {
      setIsFavorites(false);
    }
  }, [ids]);

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const response = await axiosInstance.get(
          `detail/performances?performanceId=${performId}`
        );
        setDetailData(response?.data?.detailPerformances);
      } catch (error) {
        console.error("상세 데이터 로딩 실패:", error);
      }
    };
    getDetailData();
  }, [performId]);

  const setFavorites = ({ data, performId }) => {
    dispatch(postFavorites({ data: data, performId: performId }));
    setIsFavorites(!isFavorites);
  };

  return detailData.length > 0 ? (
    <DetailArea>
      <PosterArea>
        <Poster src={detailData[0]?.poster} />
        <FavoriteBu
          onClick={() => {
            isLogIn
              ? setFavorites({ data: detailData[0], performId })
              : alert("로그인 후 즐겨찾기가 가능합니다.");
          }}
        >
          <ButtonImg src={isFavorites ? redHeart : whiteHeart} />
        </FavoriteBu>
      </PosterArea>
      <ExplainArea>
        <Title>{detailData[0]?.prfnm}</Title>
        <Explaination>
          <LeftDetail data={detailData[0]} />
          <RightDetail data={detailData[0]?.pcseguidance} />
        </Explaination>
        {detailData[0]?.relates[0]?.relateurl ? (
          <LinkButton
            onClick={() =>
              window.open(detailData[0].relates[0].relateurl, "_blank")
            }
          >
            예매
          </LinkButton>
        ) : null}
      </ExplainArea>
    </DetailArea>
  ) : null;
};

export default DetailPage;

const DetailArea = styled.div`
  display: flex;
  // justify-content: center;
  width: 90%;
  margin-top: 70px;
  margin-bottom: 30px;
  font-family: "Nanum1";
  // background-color: green;
`;

const PosterArea = styled.div`
  display: flex;
  position: relative;
`;

const Poster = styled.img`
  width: 315px;
  height: 420px;
`;

const FavoriteBu = styled.div`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 7px;
  right: 9px;
  cursor: pointer;
  // background-color: black;
`;

const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;
const LinkButton = styled.div`
  width: 440px;
  height: 52px;
  display: flex;
  margin-top: -20px;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2c2c2c;
  border-radius: 20px;
  font-size: 25px;
  cursor: pointer;
`;

const ExplainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 82px;
  // background-color: pink;
`;

const Explaination = styled.div`
  display: flex;
  // margin-bottom: 126px;
  margin-bottom: 63px;
  // background-color: black;
`;

const Title = styled.p`
  font-size: 40px;
  width: 100%;
  margin-top: 0px;
`;
