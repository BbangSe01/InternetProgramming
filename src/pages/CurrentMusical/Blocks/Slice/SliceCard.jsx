import React from "react";
import styled from "styled-components";
import dummyImg from "../../../../assets/images/dummyImg.svg";
import { useNavigate } from "react-router-dom";
const SliceCard = ({ data }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/DetailPage");
  };

  return (
    <Card onClick={() => goToDetail()}>
      <CardImg src={dummyImg} alt="포스터" />
      <CardCate>{data.category}</CardCate>
      <CardTitle>{data.title}</CardTitle>
      <CardDate>{data.date}</CardDate>
    </Card>
  );
};

export default SliceCard;

const Card = styled.div`
  width: 200px;
  height: 315px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 200px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardCate = styled.p`
  font-size: 12px;
  margin-left: 9px;
  margin-bottom: -5px;
`;

const CardTitle = styled.p`
  font-size: 16px;
  margin-left: 9px;
  margin-bottom: 12px;
`;

const CardDate = styled.p`
  font-size: 12px;
  margin-left: 9px;
  color: #8d8d8d;
`;
