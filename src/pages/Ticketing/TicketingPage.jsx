import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosInstance from "../../apis/axiosInstance";
import melonOn from "../../assets/images/melonOn.svg";
import melonOff from "../../assets/images/melonOff.svg";
import interparkOn from "../../assets/images/interparkOn.svg";
import interparkOff from "../../assets/images/interparkOff.svg";
import yes24On from "../../assets/images/yes24On.svg";
import yes24Off from "../../assets/images/yes24Off.svg";
const TicketingPage = () => {
  const [OnSite, setOnSite] = useState("melon");
  const Explainations = [
    " 새로고침 없이 예매 버튼이 자동으로 나오기 때문에 새로고침은 누르지 않는게 좋아요.",
    " 멤버십 가입을 통해 선 예매나 취소 티켓 예약 대기가 가능해요.",
    " 새로고침을 통해 예약 버튼이 활성화 돼요. 그리고 자동주문방지 문자로 티켓팅이 까다로워요.",
  ];
  const urls = [
    "https://ticket.melon.com/",
    "https://ticket.interpark.com/",
    "https://ticket.yes24.com/",
  ];
  return (
    <Screen>
      <TicketArea>
        <EachTicket onClick={() => setOnSite("melon")}>
          <img src={OnSite === "melon" ? melonOn : melonOff} />
        </EachTicket>
        <EachTicket onClick={() => setOnSite("interpark")}>
          <img src={OnSite === "interpark" ? interparkOn : interparkOff} />
        </EachTicket>
        <EachTicket onClick={() => setOnSite("yes24")}>
          <img src={OnSite === "yes24" ? yes24On : yes24Off} />
        </EachTicket>
      </TicketArea>
      <Explain>
        tip.
        {OnSite === "melon"
          ? Explainations[0]
          : OnSite === "interpark"
          ? Explainations[1]
          : Explainations[2]}
      </Explain>
      <SiteButton
        $type={OnSite}
        href={
          OnSite === "melon"
            ? urls[0]
            : OnSite === "interpark"
            ? urls[1]
            : urls[2]
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        예매하러 가기
      </SiteButton>
    </Screen>
  );
};

export default TicketingPage;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Nanum1";
`;
const TicketArea = styled.div`
  display: flex;
  margin-top: 100px;
  // background-color: blue;
  margin-bottom: 154px;
`;

const EachTicket = styled.div`
  width: 119px;
  height: 110px;
  margin-left: 125px;
  margin-right: 125px;
  cursor: pointer;
`;

const Explain = styled.p`
  font-size: 32px;
  margin-bottom: 100px;
`;

const SiteButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 52px;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ $type }) =>
    $type === "melon"
      ? "#04E632"
      : $type === "interpark"
      ? "#8E43E7"
      : "#000000"};
`;