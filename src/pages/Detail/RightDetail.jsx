import React from "react";
import styled from "styled-components";
const RightDetail = (data) => {
  return (
    <RightEx>
      <EachCate>가격</EachCate>
      <Prices>
        {data?.data.split("원,").map((price, idx, arr) => (
          <EachPrice key={idx}>
            {idx !== arr.length - 1 ? `${price}원` : price}
          </EachPrice>
        ))}
      </Prices>
    </RightEx>
  );
};

export default RightDetail;

const EachCate = styled.p`
  flex-shrink: 0; // 너비 줄어드는 것 방지
  margin-right: 103px;
`;
const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const EachPrice = styled.p`
  /* height: 40px;
  margin-left: -60px;
  margin-bottom: 22px; */
`;

const RightEx = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: 80px;
  /* background-color: green; */
`;
