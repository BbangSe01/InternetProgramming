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
      <Poster src={detailData[0]?.poster} />
      <ExplainArea>
        <Title>{detailData[0]?.prfnm}</Title>
        <Explaination>
          <LeftEx>
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
            {/* <EachBlock>
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
          </EachBlock> */}
            <EachBlock>
              <EachCate>출연진</EachCate>
              <EachData>{detailData[0]?.prfcast}</EachData>
            </EachBlock>
            <EachBlock>
              <EachCate>런 타임</EachCate>
              <EachData>{detailData[0]?.prfruntime}</EachData>
            </EachBlock>
          </LeftEx>
          <RightEx>
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
          </RightEx>
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

// const PosterLink = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 50px;
//   background-color: black;
// `;

const Poster = styled.img`
  width: 315px;
  height: 420px;
`;

const LinkButton = styled.div`
  width: 440px;
  height: 52px;
  display: flex;
  margin-top:-20px;
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
`;
const LeftEx = styled.div`
  width: 500px;
  height: 420px;
  display: flex;
  // background-color: black;
  flex-direction: column;
  margin-right: 57px;
`;

const Title = styled.p`
  font-size: 40px;
  width: 100%;
  margin-top: 0px;
`;

const EachBlock = styled.div`
  display: flex;
  font-size: 20px;
  // margin-bottom: 20px;
`;

const EachCate = styled.p`
  width: 173px;
  flex-shrink: 0; // 너비 줄어드는 것 방지
  // background-color: pink;
`;
const EachData = styled.p`
  // margin-left: 98px;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;
const EachPrice = styled.p`
  height: 40px;
  margin-left: -60px;
  margin-bottom: 22px;
`;

const RightEx = styled.div`
  display: flex;
  font-size: 20px;
  // background-color: black;
`;