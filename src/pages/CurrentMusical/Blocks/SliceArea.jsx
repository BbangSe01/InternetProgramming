import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import genreDummy from "../../../test/genreDummy";
import locDummy from "../../../test/locDummy";
import SliceCard from "./Slice/SliceCard";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../apis/axiosInstance";
const SliceArea = ({ dataType }) => {
  const [data, setData] = useState({});
  const [categoryList, setCategoryList] = useState([]);

  const getGenreData = async (genre) => {
    try {
      const response = await axiosInstance.get(
        `genre/performances?genre=${genre}&page=1`
      );
      setData((prevData) => ({
        ...prevData,
        [genre]: response.data,
      }));
    } catch (error) {
      console.error("데이터 에러:", error);
    }
  };

  const getLocData = async (loc) => {
    try {
      const response = await axiosInstance.get(
        `area/performances?area=${loc}&page=1`
      );
      setData((prevData) => ({
        ...prevData,
        [loc]: response.data,
      }));
    } catch (error) {
      console.error("데이터 에러:", error);
    }
  };
  useEffect(() => {
    setData({});
    if (dataType === "genre") {
      setCategoryList(["뮤지컬", "연극"]);
      getGenreData("연극");
      getGenreData("뮤지컬");
    } else if (dataType === "loc") {
      setCategoryList(["서울", "경기"]);
      getLocData("서울");
      getLocData("경기");
    }
  }, [dataType]);

  return (
    <Screen>
      {categoryList.map((c) => (
        <EachSlice key={c}>
          <SliceCate>{c}</SliceCate>
          <Swiper
            spaceBetween={30}
            slidesPerView={3.8}
            style={{
              width: "90%",
              height: "365px",
              marginLeft: "0px",
            }}
          >
            {data[c]?.performances?.map((d) => (
              <SwiperSlide key={d.performId}>
                <SliceCard data={d} />
              </SwiperSlide>
            ))}
          </Swiper>
          <MoreButton>더보기</MoreButton>
        </EachSlice>
      ))}
    </Screen>
  );
};

export default SliceArea;
const Screen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 76px;
  overflow-x: hidden; // 좌우 스크롤 방지
`;

const EachSlice = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;
  position: relative; // 슬라이드 기준 포지셔닝을 위해 추가
`;

const SliceCate = styled.p`
  font-size: 32px;
  margin-right: 20px;
`;

const MoreButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 11%;
  z-index: 10; // 다른 요소들이 위에 떠있어서 인식 못하는 걸 방지
  font-size: 18px;
  &:hover {
    color: #ff6347; // 원하는 색으로 변경 (예: tomato)
  }
`;
