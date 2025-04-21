import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import genreDummy from "../../../test/genreDummy";
import locDummy from "../../../test/locDummy";
import SliceCard from "./Slice/SliceCard";

const SliceArea = ({ dataType }) => {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (dataType === "genre") {
      setData(genreDummy);
      setCategoryList(["뮤지컬", "연극"]);
    } else if (dataType === "loc") {
      setData(locDummy);
      setCategoryList(["서울", "인천"]);
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
              height: "330px",
              // backgroundColor: "black",
              marginLeft: "0px",
            }}
          >
            {data[c]?.map((d) => (
              <SwiperSlide key={d.id}>
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
`;

const SliceCate = styled.p`
  font-size: 32px;
  margin-right: 20px;
`;
