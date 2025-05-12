import React, { useState, useEffect } from "react";
import axiosInstance from "../../apis/axiosInstance";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";
const SidePage = () => {
  const navigate = useNavigate();
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    const getRankData = async () => {
      try {
        const response = await axiosInstance.get("ranks");
        console.log(response);
        const topFiveRanks = response.data.ranks.slice(0, 4);
        setRankData(topFiveRanks);
      } catch (error) {
        console.error("데이터 에러:", error);
      }
    };

    getRankData();
  }, []);

  const goToDetail = () => {
    navigate("/DetailPage");
  };
// console.log(rankData);
  // console.log(curBanner);/
  return (
    <SideArea onClick={() => goToDetail()}>
      <Swiper
        key={rankData.length}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
      >
        {rankData.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideWrapper>
              <SideImg src={item.posterUrl} alt={item.performanceName} />
              <Explaination>
                <SideCate>{item.category}</SideCate>
                <SideTitle>{item.performanceName}</SideTitle>
                <SideDate>{item.period}</SideDate>
                <SideLocation>{item.placeName}</SideLocation>
              </Explaination>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SideArea>
  );
};

export default SidePage;

const SideArea = styled.div`
  width: 27%;
  position: fixed;
  min-height: 100%;
  top: 70px;
  left: 0;
  box-shadow: 5px 5px 18px gray;
  cursor: pointer;
  overflow: hidden;
`;

const SideImg = styled.img`
  width: 100%;
  height: 65vh;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Explaination = styled.div`
padding: 15px 20px;
  background-color: #fff;
  font-family: "Nanum1";
`;

const SideCate = styled.p`
  margin-bottom: 18px;
  font-size: 13px;
`;

const SideTitle = styled.p`
  font-size: 18px;
  margin-bottom: 27px;
`;

const SideDate = styled.p`
  font-size: 13px;
  margin-bottom: 13px;
  color: #8d8d8d;
`;

const SideLocation = styled.p`
  font-size: 13px;
  color: #8d8d8d;
`;
