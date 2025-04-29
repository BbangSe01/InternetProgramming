import React from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
const MorePage = () => {
  const location = useLocation();
  const getType = location.state.type;
  const getCategory = location.state.category;

  console.log(getType, getCategory);
  // const [ref, inView] = useInView();
  // const {
  //   data,
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  //   isFetchingNextPage,
  //   isFetchingPreviousPage,
  //   ...rest
  // } = useInfiniteQuery({
  //   queryKey,
  //   queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
  //   getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  //   getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  //   ...options,
  // });

  return <div></div>;
};

export default MorePage;
