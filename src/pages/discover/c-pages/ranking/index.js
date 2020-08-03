import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import HYTopRanking from "./c-cpns/top-ranking";
import HYRankingHeader from './c-cpns/ranking-header';
import HYRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function HYRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HYTopRanking/>
      </RankingLeft>
      <RankingRight>
        <HYRankingHeader/>
        <HYRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
