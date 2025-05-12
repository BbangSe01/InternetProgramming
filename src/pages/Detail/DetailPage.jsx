import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosInstance from "../../apis/axiosInstance";
import { useParams } from "react-router-dom";
const DetailPage = () => {
   // url에서 performId 추출
  const { id: performId } = useParams();
  const [detailData, setDetailData] = useState([]);

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

  console.log(detailData);
  return detailData.length > 0 ? (
    <DetailArea>
      <PosterLink>
        <Poster src={detailData[0]?.poster} />
        {detailData[0]?.relates[0]?.relateurl ? (
          <LinkButton
            onClick={() =>
              window.open(detailData[0].relates[0].relateurl, "_blank")
            }
          >
            예매
          </LinkButton>
        ) : null}
      </PosterLink>
      <Explaination>
        <Title>{detailData[0]?.prfnm}</Title>
        <EachBlock>
          <EachCate>공연장</EachCate>
          <EachData>{detailData[0]?.fcltynm}</EachData>
        </EachBlock>
        <EachBlock>
          <EachCate>공연기간</EachCate>
          <EachData>
            {detailData[0]?.prfpdfrom}~{detailData[0]?.prfpdto}
          </EachData>
        </EachBlock>
        <EachBlock>
          <EachCate>관람연령</EachCate>
          <EachData>{detailData[0]?.prfage}</EachData>
        </EachBlock>
        <EachBlock>
          <EachCate>가격</EachCate>
          <Prices>
            {[...detailData[0]?.pcseguidance.split("원,")].map(
              (price, idx, arr) => (
                <EachPrice key={idx}>
                  {idx !== arr.length - 1 ? `${price}원` : price}
                </EachPrice>
              )
            )}
          </Prices>
        </EachBlock>
        <EachBlock>
          <EachCate>출연진</EachCate>
          <EachData>{detailData[0]?.prfcast}</EachData>
        </EachBlock>
        <EachBlock>
          <EachCate>런 타임</EachCate>
          <EachData>{detailData[0]?.prfruntime}</EachData>
        </EachBlock>
      </Explaination>
    </DetailArea>
  ) : null;
};

export default DetailPage;

const DetailArea = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 70px;
  margin-bottom: 70px;
  font-family: "Nanum1";
  // background-color: green;
`;

const PosterLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  // background-color: black;
`;

const Poster = styled.img`
  width: 440px;
  height: 588px;
  margin-bottom: 34px;
`;

const LinkButton = styled.div`
  width: 440px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2c2c2c;
  border-radius: 20px;
  font-size: 25px;
  cursor: pointer;
`;

const Explaination = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 49px;
  // background-color: pink;
`;

const Title = styled.p`
  font-size: 40px;
  // background-color: green;
  margin-top: 0px;
  margin-bottom: 75px;
`;

const EachBlock = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
`;

const EachCate = styled.p`
  width: 82px;
`;
const EachData = styled.p`
  margin-left: 98px;
`;

const Prices = styled.div`
  margin-left: 98px;
`;
const EachPrice = styled.p`
  height: 40px;
  margin-bottom: 22px;
`;