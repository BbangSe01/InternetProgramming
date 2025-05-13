import React from "react";
import styled from "styled-components";
const LeftDetail = (data) => {
  console.log(data);
  return (
    <LeftEx>
      <EachBlock>
        <EachCate>공연장</EachCate>
        <EachData>{data?.data?.fcltynm}</EachData>
      </EachBlock>
      <EachBlock>
        <EachCate>공연기간</EachCate>
        <EachData>
          {data?.data?.prfpdfrom}~{data?.data?.prfpdto}
        </EachData>
      </EachBlock>
      <EachBlock>
        <EachCate>관람연령</EachCate>
        <EachData>{data?.data?.prfage}</EachData>
      </EachBlock>
      <EachBlock>
        <EachCate>출연진</EachCate>
        <EachData>{data?.data?.prfcast}</EachData>
      </EachBlock>
      <EachBlock>
        <EachCate>런 타임</EachCate>
        <EachData>{data?.data?.prfruntime}</EachData>
      </EachBlock>
    </LeftEx>
  );
};

export default LeftDetail;

const LeftEx = styled.div`
  width: 500px;
  height: 420px;
  display: flex;
  flex-direction: column;
  margin-right: 57px;
`;

const EachBlock = styled.div`
  display: flex;
  font-size: 20px;
`;

const EachData = styled.p``;
const EachCate = styled.p`
  width: 173px;
  flex-shrink: 0; // 너비 줄어드는 것 방지
`;
