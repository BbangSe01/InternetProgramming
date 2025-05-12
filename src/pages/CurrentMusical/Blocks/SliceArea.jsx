import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import styled from "styled-components";
import SliceCard from "./Slice/SliceCard";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
const SliceArea = ({ dataType }) => {
  const [data, setData] = useState({});
  const [categoryList, setCategoryList] = useState([]);

  const navigate = useNavigate();

  const goToMorePage = ({ c, dataType }) => {
    navigate("/MorePage", {
      state: {
        type: `${dataType}`,
        category: `${c}`,
      },
    });
  };

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
      setCategoryList([
        "뮤지컬",
        "연극",
        "한국 국악",
        "대중 음악",
        "서양 클래식",
      ]);
      getGenreData("연극");
      getGenreData("뮤지컬");
      getGenreData("한국 국악");
      getGenreData("대중 음악");
      getGenreData("서양 클래식");
    } else if (dataType === "area") {
      setCategoryList(["서울", "경기", "인천"]);
      getLocData("서울");
      getLocData("경기");
      getLocData("인천");
    }
  }, [dataType]);

  return (
    <Screen>
      {categoryList.map((c) => (
        <EachSlice key={c}>
          <NameAndButton>
            <SliceCate>{c}</SliceCate>
            <MoreButton onClick={() => goToMorePage({ c, dataType })}>
              더보기
            </MoreButton>
          </NameAndButton>
          <Swiper
          modules={[Scrollbar]}
            spaceBetween={30}
            slidesPerView={3.8}
            scrollbar={{ draggable: true }}
            style={{
              width: "90%",
              height: "360px",
              marginLeft: "0px",
            }}
          >
            {data[c]?.performances?.map((d) => (
              <SwiperSlide key={d.performId}>
                <SliceCard data={d} />
              </SwiperSlide>
            ))}
          </Swiper>
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
  height: 520px;
  // position: relative; // 슬라이드 기준 포지셔닝을 위해 추가
`;

const NameAndButton = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SliceCate = styled.p`
  font-size: 32px;
  margin-right: 20px;
`;

const MoreButton = styled.div`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #ff6347;
  }
`;
