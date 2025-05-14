import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MoreCard = (data) => {
  console.log(data);
  const navigate = useNavigate();

  const goToDetail = (performId) => {
    navigate(`/DetailPage/${performId}`);
  };
  return (
    <Card onClick={() => goToDetail(data.data.performId)}>
      <CardImg src={data.data.posterUrl} alt="포스터" />
      <CardCate>{data.data.genreName}</CardCate>
      <CardTitle>{data.data.performName}</CardTitle>
      <CardDate>
        {data.data.startDate}~{data.data.endDate}
      </CardDate>
    </Card>
  );
};

export default MoreCard;

const Card = styled.div`
  width: 253px;
  height: 458px;
  margin-bottom: 125px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 253px;
  height: 320px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardCate = styled.p`
  font-size: 12px;
  margin-left: 9px;
  margin-top: 20px;
  // margin-bottom: 15px;
`;

const CardTitle = styled.p`
  font-size: 16px;
  margin-left: 9px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDate = styled.p`
  font-size: 12px;
  margin-left: 9px;
  color: #8d8d8d;
`;
