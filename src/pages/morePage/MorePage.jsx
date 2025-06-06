import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MoreCard from "../CurrentMusical/Blocks/Slice/MoreCard";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import getCateData from "../../hooks/getCateData";
import loadingSpinner from "../../assets/images/Loading2.gif";

const MorePage = () => {
  const location = useLocation();
  const getType = location.state?.type;
  const getCategory = location.state?.category;

  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [{ getType }, { getCategory }],
    queryFn: ({ pageParam }) => {
      return getCateData({
        kind: getType,
        category: getCategory,
        page: pageParam,
      });
    },
    // last는 가장 마지막으로 불러온 페이지의 응답 데이터
    // allPages는 지금까지 불러온 page배열
    getNextPageParam: (last, allPages) => {
      // 한번의 api호출에 10개의 데이터 get
      if (last.performances.length === 10) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    enabled: Boolean(getType && getCategory), // getType과 getCategory가 정의된 후에만 쿼리 실행
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      console.log("🔥 Fetching next page...");
      fetchNextPage();
    } else {
      console.log("📌 조건 미충족:", {
        inView,
        hasNextPage,
        isFetchingNextPage,
      });
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading || isFetchingNextPage) console.log(true);
  return (
    <Screen>
      <Title>{getCategory}</Title>
      <InfiniteArea>
        {data?.pages?.map((page) =>
          page?.performances?.map((eachD) => (
            <MoreCard key={eachD.performId} data={eachD} />
          ))
        )}
      </InfiniteArea>
      {isLoading || isFetchingNextPage ? <img src={loadingSpinner} /> : null}
      <ObserverTag ref={ref} />
    </Screen>
  );
};

export default MorePage;

const Screen = styled.div`
  width: 100%;
  font-family: "Nanum1";
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 110px;
  font-size: 32px;
  margin-bottom: 87px;
`;

const InfiniteArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1490px;
  flex-wrap: wrap;
  // background-color: green;
`;

const ObserverTag = styled.div`
  width: 10px;
  height: 10px;
`;

const LoadingSpinner = styled.img`
  width: 100px;
  height: 100px;
`;
